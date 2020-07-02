import React from 'react'

function Info(props){
    return(
        <div className="mx-5 lg:mx-0 mt-20 " data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
        <h1 className="col-span-4 text-xl lg:text-4xl">{props.title} </h1>
            <h3 className="font-sans-serif text-2xl"> {props.purpose}</h3>

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