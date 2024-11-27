import categories from "@/public/categories";

import { useRef, useState } from "react";

export default function CategoryInfoButton({ cat_name, cat_option }) {
  // state to control popup visibility
  const [showPopup, setShowPopup] = useState(false);
  // reference to access button easier
  const btn = useRef(null);
  // retrieve category description
  const category = [...categories].find(a => {
    return a.cat_name === cat_name;
  })

  // get the next separator's DOM object if there is one
  function getNextSep() {
    let next_group = btn.current.parentElement.parentElement.parentElement.nextElementSibling;
    if (next_group !== null) {
      return(next_group.firstElementChild)
    }
    return(null)
  }

  function summonPopup() {
    let next_sep = getNextSep();
    // temporarily lower next separator's z-index so popup shows up on top 
    if (next_sep) next_sep.style.zIndex = 9;
    setShowPopup(true);
  }

  function closePopup() {
    let neighbour_header = getNextSep();
    // restore previous z index
    if (neighbour_header) neighbour_header.style.zIndex = 10;
    setShowPopup(false);
  }

  function CategoryInfoPopup() {
    return(
      <div className="
          absolute top-8 right-[-0.48rem]
          w-[70vw] md:w-[40vw]
          z-30
      ">
        {/* popup arrow */}
        <div className="absolute w-4 h-4 top-[-13px] right-[1.2rem]">
          <svg viewBox="0 0 10 7" className="w-4 h-4 fill-colour4" xmlns="http://www.w3.org/2000/svg">
            <polygon points="5,0 10,7 0,7" />
          </svg>
        </div>
        {/* popup contents */}
        <div className="
            max-h-[40vh]
            bg-colour4 rounded-md shadow-2xl shadow-black
        ">
          {/* popup text */}
          <div className="w-full h-full overflow-auto p-3">
            {/* category name (popup header) */}
            <h3 className="text-lg font-bold text-colour1">
              {cat_name.charAt(0).toUpperCase() + cat_name.slice(1) + ": " + cat_option.charAt(0).toUpperCase() + cat_option.slice(1)}
            </h3>
            {/* category description (popup body) */}
            <p className="text-colour1">
              {category.cat_options[cat_option]}
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  return(
    <div className="relative"
      onMouseEnter={summonPopup} 
      onMouseLeave={closePopup}
    >
      <button
        id={cat_option+"btn"}
        ref={btn}
        data-showing={showPopup}
        className="
          w-5 h-5 mr-[.6rem]
          rounded-full border-2 border-colour3
          bg-opacity-0 bg-colour3
          text-colour3 font-bold text-xs
          data-[showing='true']:bg-opacity-100
          data-[showing='true']:text-colour2
          data-[showing='true']:border-colour5
        "
      >
        ?
      </button>
      {showPopup && <CategoryInfoPopup cat_name={cat_name} cat_option={cat_option} />}
    </div>
  )
}