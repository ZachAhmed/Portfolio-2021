import React from "react"


export default function Grid ({ children }) {
  return (
    <div class="grid grid-cols-3 grid-rows-6">
    { children }
    </div>
  )
}

