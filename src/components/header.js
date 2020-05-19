import React from 'react'

export default function Header ({children}){
    return(
        <div className='bg-blue h-10 w-screen fixed'>
            {children}
        </div>
    )
}