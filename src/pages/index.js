import React from "react"
import Project from "../components/project"
import BigDiv from "../components/bigDiv"
import InsideGrid from "../components/insideGrid"
import { Link } from "gatsby"


export default function Index(){
    return(
        <BigDiv>
            <div className="h-screen grid grid-cols-10 grid-rows-6">
                <div className="container col-span-10 row-start-2">
                    <h1 className="text-center text-5xl font-serif text-blue">Zachary Ahmed</h1>
                    <p className="mx-4 text-center text-xl font-sans-serif max-w-xl lg:text-xl">A digital designer interested by interactive experiences and visual design. Currently working in Montreal.</p>
                </div>
                <Link to='/about' className="text-xl font-serif text-blue text-center col-span-3 col-start-2 row-start-5 mt-24 md:col-start-1 text-3xl mt-10" data-sal="fade" data-sal-delay="0" data-sal-easing="ease">About</Link>
                <Link to='/about' className="text-xl font-serif text-blue text-center col-span-3 col-start-7 row-start-5 mt-24 md:col-start-8 text-3xl mt-10" data-sal="fade" data-sal-delay="0" data-sal-easing="ease">Contact</Link>
            </div>

            <InsideGrid>
                <div className="col-start-1 mb-4 md:col-start-2 col-span-3 xl:col-start-3"  data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Link to='/'>
                        <Project pTitle="MyPiece Case Study" pDescription="User experience & interface design project for a deal-finding app aimed at university students."/>
                    </Link>
                </div>
                
                <div className="row-start-2 col-start-1 col-span-2 md:col-start-2 col-span-3 lg:col-start-4 xl:col-start-6" data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Link to='/about'>
                        <Project pTitle="The Nature Of Things" pDescription="Creative computaton project exploring how everyday objects might behave unexpectedly in an alternate reality.My Second Project"/>
                    </Link>
                </div>

                <div className="row-start-3 col-start-1 col-span-2 md:col-start-2 col-span-3 lg:col-start-4 xl:col-start-6" data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Link to='/about'>
                        <Project pTitle="The Nature Of Things" pDescription="Creative computaton project exploring how everyday objects might behave unexpectedly in an alternate reality.My Second Project"/>
                    </Link>
                </div>

            </InsideGrid>
        </BigDiv>
    )
}