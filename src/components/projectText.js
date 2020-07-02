import React from 'react'


function ProjectText(props) {
    return(
        <div>
            <h3 className="text-xl lg:text-2xl font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>{props.bigtext}</h3>
            <p className="mt-3 lg:text-xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>{props.bodytext}</p>
        </div>
    )
} 

export default ProjectText