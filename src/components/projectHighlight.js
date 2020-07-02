import React from 'react'

function Highlight(props){
    return(
        <div className="px-5 py-2 row-start-3 col-span-3 lg:rounded-md lg:col-span-4 lg:col-start-3 bg-lavender">
            <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>{props.heading}</h3>
            <p className="mt-3 lg:text-xl">{props.p1} </p>
            <p className="mt-3 lg:text-xl">{props.p2} </p>
        </div>    
    )
}

export default Highlight