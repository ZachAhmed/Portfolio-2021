import React from "react"

export default function Project(props) {
  return (
    <div className="border-2 border-white rounded-md p-2 min-h-full" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="200">
      <h1 className="font-serif text-2xl text-white">{props.pTitle}</h1>
      <p className="font-sans-serif text-xl mt-4 text-white leading-snug">{props.pDescription}</p>
    </div>
  )
}

