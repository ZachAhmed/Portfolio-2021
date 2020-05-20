import React from "react"


export default function Grid ({ children }) {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-8 bg-blue">
    { children }
    </div>
  )
}

