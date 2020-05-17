import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import BigDiv from "../components/bigDiv"
import { Link } from "gatsby"


export default function Index(){
    return(
    <Layout> 
        <BigDiv>
            <div className="h-screen grid grid-cols-10 grid-rows-6">
                <div className="container col-span-10 row-start-2">
                    <h1 className="text-center text-5xl font-serif text-blue">Zachary Ahmed</h1>
                    <p className="text-center text-3xl font-sans-serif">The person person</p>
                </div>
                <Link to='/about' className="text-xl font-serif text-blue text-center col-span-3 col-start-2 row-start-5 mt-24 md:col-start-1 text-3xl mt-10" data-sal="fade" data-sal-delay="0" data-sal-easing="ease">About</Link>
                <Link to='/about' className="text-xl font-serif text-blue text-center col-span-3 col-start-7 row-start-5 mt-24 md:col-start-8 text-3xl mt-10" data-sal="fade" data-sal-delay="0" data-sal-easing="ease">Contact</Link>
            </div>

            <div className="grid grid-rows-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 h-screen">

                <div className="col-start-1 md:col-start-2 col-span-3 xl:col-start-3"  data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Project pTitle="Project 1" pDescription="My Frist Project"/>
                </div>
                
                <div className="h-20 col-start-1 col-span-2 md:col-start-2 col-span-3 row-start-2 lg:col-start-4 xl:col-start-6" data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Project pTitle="Project 2" pDescription="My Second Project"/>
                </div>

                <div className="h-20 col-start-1 col-span-2 md:col-start-2 col-span-3 row-start-2 lg:col-start-4 xl:col-start-6" data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Project pTitle="Project 3" pDescription="My Third Project"/>
                </div>

                <div className="h-20 col-start-1 col-span-2 md:col-start-2 col-span-3 row-start-2 lg:col-start-4 xl:col-start-6" data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Project pTitle="Project 4" pDescription="My Fourth Project"/>
                </div>

                <div className="h-20 col-start-1 col-span-2 md:col-start-2 col-span-3 row-start-2 lg:col-start-4 xl:col-start-6" data-sal="slide-up" data-sal-delay="30" data-sal-easing="easeInOutExpo">
                    <Project pTitle="Project 5" pDescription="My Fifth Project"/>
                </div>
            </div>
        </BigDiv>
    </Layout> 
    )
}