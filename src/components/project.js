import React from "react"

export default function Project(props) {
  return (
    <div className="border-2 border-black rounded-md p-2 min-h-full" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease" data-sal-duration="100">
      <h1 className="font-serif text-2xl text-black">{props.pTitle}</h1>
      <p className="font-sans-serif text-xl mt-4 text-black leading-snug">{props.pDescription}</p>
    </div>
  )
}

