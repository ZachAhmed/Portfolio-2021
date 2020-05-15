import React from "react"
import {Link} from "gatsby"

export default function Project(props) {
  return (
    <div style={{ margin: `10px`, padding: `10px`, backgroundColor:'red'}}>
      <Link to='/'>
        <h1 className="font-serif text-2xl text-white">{props.pTitle}</h1>
        <p className="font-sans-serif text-xl mt-3 text-white">{props.pDescription}</p>
      </Link>
    </div>
  )
}

