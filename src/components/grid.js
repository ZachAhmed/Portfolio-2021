import React from "react"


function Grid ({ children }) {
  return (
    <div className="grid grid-cols-3 grid-rows-10 gap-10 row-gap-10 bg-white md:grid-cols-8 md:grid-rows-10 justify-center">
    { children }
    </div>
  )
}

export default Grid;