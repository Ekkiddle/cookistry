"use client"

import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CheckmarkContext } from "./CheckmarkContext";
import { createPortal } from "react-dom";

export default function BackButton({confirmCheckboxes}) {
  const {existCheckedSteps} = confirmCheckboxes ? useContext(CheckmarkContext) : false;
  const [showConfirmation, setShowConfirmation] = useState(false);
  const popup_ref = useRef(null);

  const router = useRouter();

  function goBack() {
    if (confirmCheckboxes && existCheckedSteps) {
      // trigger confirmation
      setShowConfirmation(true);
    } else {
      router.back();
    }
  }

  // close popup on click outside
  useEffect(() => {
    function handleClickOutside(event) {
        if (popup_ref.current && !popup_ref.current.contains(event.target)) {
            setShowConfirmation(false); // Close popup if clicked outside
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return(
    <div>
    <button onClick={goBack} className="text-sm text-color4 hover:text-colour3">
        <u className="flex flex-row items-center mb-0">
            <IoIosArrowBack /> {"Back"}
        </u>
    </button>
    {showConfirmation && createPortal(
      // background
      <div className="z-40 fixed inset-0 bg-colour2/50 flex justify-center items-center">
        {/* popup container */}
        <div ref={popup_ref}
          className="
            w-[90%] max-w-96
            flex flex-col gap-4 p-6
            bg-colour5 rounded-md shadow-xl shadow-colour1/75"
        >
          <h3 className="text-xl font-bold">
            Are you sure you want to leave this page?
          </h3>
          <p>
            It seems you have checked off a step.
            If you leave this page now, this information will be lost!
          </p>
          {/* buttons */}
          <div className="mt-3 w-full flex gap-4 justify-center">
            <button
              autoFocus
              onClick={() => {router.back()}}
              className="
                py-1 px-2
                text-sm text-colour2
                border-2 border-current
                bg-colour5 rounded-md shadow-md shadow-colour2/25
                hover:text-colour2/80 hover:shadow-colour2/80"
            >
              Leave Page
            </button>
            <button
              onClick={() => {setShowConfirmation(false)}}
              className="
                py-2 px-3
                text-sm text-colour5
                bg-colour2 rounded-md shadow-md shadow-colour2/30
                hover:bg-colour2/80 hover:shadow-colour2/80"
            >
              Stay on Page
            </button>
          </div>
        </div>
      </div>,
      document.body
    )}
    </div>
  )
}