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
          if (e.intersectionRatio < 0.8) btn.current.style.display = "none";
        } else {
          // it's becoming more visible
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
      <div ref={btn} className="
        z-20
        hidden fixed bottom-3 left-1/2
        "
      >
        {/* for positioning button components relative to each other */}
        <div onClick={toTop} className="
          group hover:cursor-pointer
          h-6 sm:h-7 md:h-8 translate-x-[-50%]
          flex flex-row items-stretch
        ">
          {/* arrow icon */}
          <svg viewBox="0 0 10 10"
            className=" z-[1]
              p-1 md:px-3
              stroke-colour5 stroke-1
              bg-colour2 shadow-md shadow-colour1/75
              rounded-l-md md:rounded-full md:group-hover:rounded-r-none
              md:duration-100
              md:translate-x-[105%] md:group-hover:translate-x-0" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1 L9 1 M1 7 L5 3 L9 7 M5 3 L5 9" fillOpacity="0"
              strokeLinejoin="round" strokeLinecap="round"
            />
          </svg>
          {/* text popup */}
          <div className=" z-[0]
            px-1 w-max
            bg-colour3 rounded-r-md md:rounded-r-full shadow-md shadow-colour1/75
            text-sm sm:text-base md:text-lg text-colour5 text-nowrap
            md:duration-100
            md:scale-x-0 md:group-hover:scale-x-100"
          >
            Scroll to Top
          </div>
        </div>
      </div>
    </>
  )
}