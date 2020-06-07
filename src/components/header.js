import React from 'react'
import { withPrefix, Link } from "gatsby"

export default function Header (props){
    return(
        <div className='bg-blue h-12 w-screen fixed z-50 text-white font-serif md:text-2xl p-1' id='name'>
            <Link to="/">{props.staticName}</Link>
        </div>
    )
}
