import React from 'react'


// The generic text block component that makes up a project page. has a title and paragraph.

function ProjectText(props) {
    return(
        <div className='lg:mb-5'>
            <h3 className="text-xl lg:text-2xl font-semibold" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>{props.bigtext}</h3>
            <p className="mt-3 lg:text-xl" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>{props.bodytext}</p>
            <p className="mt-3 lg:text-xl" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>{props.bodytext2}</p>
        </div>
    )
} 

export default ProjectText