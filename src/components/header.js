import React from 'react'

export default function Header ({children}){
    return(
        <div className='bg-white h-12 w-screen fixed'>
            {children}
        </div>
    )
}