import React from 'react'


// The generic text block component that makes up a project page. has a title and paragraph.

function ProjectText(props) {
    return(
        <div className='lg:mb-5'>
            <h3 className="text-xl lg:text-2xl font-semibold" >{props.bigtext}</h3>
            <p className="mt-3 lg:text-xl" >{props.bodytext}</p>
            <p className="mt-3 lg:text-xl" >{props.bodytext2}</p>
            <p className="mt-3 lg:text-xl" >{props.bodytext3}</p>
        </div>
    )
} 

export default ProjectText