import React from 'react'

export default function Header (props){
    return(
        <div className='bg-blue h-12 w-screen fixed' id='name'>
            {props.Content}
        </div>
    )
}
