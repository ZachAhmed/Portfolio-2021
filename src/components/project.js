import React from "react"
import Link from 'gatsby'

export default function Project(props) {
  return (
    <div class="border-2 border-black rounded-md">
      <h1 class="font-serif text-2xl text-black">{props.pTitle}</h1>
      <p class="font-sans-serif text-xl mt-3 text-black">{props.pDescription}</p>
    </div>
  )
}

