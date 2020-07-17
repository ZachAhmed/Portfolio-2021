import React from 'react'
import ProjectText from './projectText'


// The main information section of the Project. Contains information like title, summary, team and timeline.
// First thing used on a project page.

function Info(props){
    return(
        <div className="mx-5 lg:mb-5 lg:mx-0 mt-20 " data-aos="slide-up" data-aos-duration='800' data-aos-easing='ease-in-out-sine'>
            <h1 className="col-span-4 text-2xl lg:text-4xl">{props.title} </h1>
            <h3 className="font-sans-serif text-xl lg:text-2xl"> {props.purpose}</h3>

            <h4 className=" font-sans-serif mt-4 text-lg lg:text-2xl font-semibold"> Timeline </h4>
            <p className='lg:text-xl text-md'>{props.timeline}</p>

            <h4 className=" font-sans-serif mt-4 text-lg lg:text-2xl font-semibold"> Responsibilities </h4>
            <p className='lg:text-xl text-md'>{props.responsibilities}</p>

            <h4 className=" font-sans-serif mt-4 text-lg lg:text-2xl font-semibold"> Team </h4>
            <p className='lg:text-xl text-md'> {props.team}</p>
        </div>
    )
}

export default Info