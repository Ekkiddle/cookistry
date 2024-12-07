import { useState } from "react"
import DetailedTechniques from "./DetailedTechniques";
import techniques from "@/public/techniques/techniques";
import Link from "next/link";

export default function TechniquePopup({name, children}) {
  const [showPopup, setShowPopup] = useState(false);
  // find technique using name, if given, or children text, if not
  const technique = [...techniques].find((item) => {
    let target = name ? name : children;
    return item.name.toLowerCase() === target.toLowerCase();
  })

  return (
  <span
    onMouseEnter={() => {setShowPopup(true)}}
    onMouseLeave={() => {setShowPopup(false)}}
  >
    <span className="text-colour3 font-bold underline">{children}</span>
    {showPopup &&
    
    <div className="
      z-[5] absolute translate-y-[-1px]
      h-1/2 w-[85%] lg:w-1/2 
      border-2 border-colour4
      bg-colour5 rounded-lg shadow-lg shadow-colour2">
      <div className="h-full w-full rounded-lg overflow-auto">
        <DetailedTechniques technique={technique} isPopup={true}/>
      </div>
      {/* button container */}
      <div className="
            z-10 absolute
            flex gap-1
            top-4 right-4"
      >
        <Link href={`/techniques/${technique.slug}`} target="_blank"
          className="
            size-5 p-1
            stroke-2 stroke-colour5
            bg-colour3 rounded-sm
            hover:shadow-md hover:shadow-colour2/75"
        >
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4 L2 4 L2 18 L16 18 L16 10  M10 10 L19 1 L15 1 L19 5 L19 1 "
            strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </Link>
        <button onClick={() => {setShowPopup(false)}}
          className="
            size-5 p-1
            stroke-2 stroke-colour5
            bg-colour2 rounded-sm
            hover:shadow-md hover:shadow-colour1/75"
        >
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2 L18 18 M18 2 L2 18" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>}
  </span>)
}