import React from "react"

export default function InsideGrid({ children }) {
    return (
      <div className="grid gap-3 grid-rows-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10">
      { children }
      </div>
    )
  }