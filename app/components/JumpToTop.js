"use client"

import { useEffect, useRef } from "react"

export default function JumpToTop() {
  const detector = useRef(null);
  const btn = useRef(null);

  function toTop() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // all other browsers
    // hide button
    btn.current.style.display = "none";
  }

  useEffect(() => {
    const options = {root: null, rootMargin: "0px", threshold: 0.75}
    // show/hide based on intersection of detector element with viewport
    const observer = new IntersectionObserver((es) => {
      es.forEach((e) => {
        console.log(btn.current);
        if (e.isIntersecting) {
          // it's becoming less visible
          console.log("is intersecting");
          console.log(e.intersectionRatio);
          if (e.intersectionRatio < 0.8) btn.current.style.display = "none";
        } else {
          // it's becoming more visible
          console.log("not intersecting");
          console.log(e.intersectionRatio);
          btn.current.style.display = "block";
        }
      })
    }, options)

    observer.observe(detector.current);
  }, [])

  return(
    <>
      {/* detector for scroll position */}
      <div ref={detector} className="absolute top-0 h-screen w-full z-[-1]"></div>
      {/* for positioning button relative to screen */}
      <div ref={btn} onClick={toTop} className="
        group z-20
        hidden fixed left-3 bottom-3
        hover:cursor-pointer"
      >
        {/* for positioning button components relative to each other */}
        <div className="h-6 flex flex-row items-stretch">
          {/* arrow icon */}
          <svg viewBox="0 0 10 10"
            className=" z-[1]
              p-1 
              stroke-colour3 stroke-1 
              bg-colour5 shadow-md shadow-colour2/50
              rounded-l-md md:rounded-md md:group-hover:rounded-r-none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1 L9 1 M1 7 L5 3 L9 7 M5 3 L5 9" fillOpacity="0"
              strokeLinejoin="round" strokeLinecap="round"
            />
          </svg>
          {/* text popup */}
          <div className=" z-[0]
            px-1
            bg-colour3 rounded-r-md shadow-md shadow-colour2/50
            text-sm text-colour5
            md:origin-left md:duration-100
            md:scale-x-0 md:group-hover:scale-x-100"
          >
            Scroll to Top
          </div>
        </div>
      </div>
    </>
  )
}