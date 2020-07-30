import React from 'react'


// Used to highlight a section of text on a project page, such as the goal and the outcome. 


function Highlight(props){
    return(
        <div className="px-5 py-2 col-span-3 self-start lg:rounded-md lg:col-span-4 lg:col-start-3 bg-lavender">
            <h3 className="font-semibold lg:text-2xl" >{props.heading}</h3>
            <p className="mt-3 lg:text-xl">{props.p1} </p>
            <p className="mt-3 lg:text-xl">{props.p2} </p>
        </div>    
    )
}

export default Highlight