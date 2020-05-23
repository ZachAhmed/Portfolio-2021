import React from "react"


export default function Grid ({ children }) {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-8 bg-white md:grid-cols-6 md:grid-rows-5">
    { children }
    </div>
  )
}

