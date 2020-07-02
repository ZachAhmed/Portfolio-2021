import React from 'react'
import { withPrefix, Link } from 'gatsby'
import Menu from './menu'

export default function Header (props){
    return(
        <div className='bg-blue h-12 w-screen fixed z-50 text-white p-1 pl-5 font-serif text-2xl md:text-2xl' id='name'>
            <Link to="/">{props.staticName}</Link>
        </div>
    )
}
