import React from "react"

export default function Project(props) {
  return (
    <div className="border-4 border-blue rounded-md p-2 min-h-205 md:min-h-full p-3" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="200">
      <h1 className="font-serif text-2xl text-blue">{props.pTitle}</h1>
      <p className="font-sans-serif text-xl mt-4 text-blue leading-snug">{props.pDescription}</p>
    </div>
  )
}

