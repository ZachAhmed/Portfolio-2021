import React from "react"


export default function Grid ({ children }) {
  return (
    <div class="grid grid-cols-3 grid-rows-5 gap-8">
    { children }
    </div>
  )
}

