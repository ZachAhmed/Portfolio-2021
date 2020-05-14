import React from "react"


export default function BigDiv({ children }) {
  return (
    <div className="h-100 w-screen border-blue fixed overflow-scroll md: border-40">
    { children }
    </div>
  )
}

