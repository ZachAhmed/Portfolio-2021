import React from "react"


export default function Grid ({ children }) {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-10 row-gap-10 bg-white md:grid-cols-8 grid-rows-5">
    { children }
    </div>
  )
}

