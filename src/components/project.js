import React from "react"

export default function Project(props) {
  return (
    <div className="mx-4 p-5 bg-red ">
      <h1 className="font-serif text-2xl text-white">{props.pTitle}</h1>
      <p className="font-sans-serif text-xl mt-3 text-white">{props.pDescription}</p>
    </div>
  )
}

