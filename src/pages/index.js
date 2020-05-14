import React from "react"
import Layout from "../components/layout"
import Project from "../components/project"
import { Link } from "gatsby"


export default function Index(){
    return(
    <Layout> 
        <div className="h-100 border-blue border-40 fixed overflow-scroll w-screen md: border-blue-200">
            <div className="grid grid-rows-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 h-screen">
                <container className="col-span-10 row-start-2 ">
                    <h1 className="text-center text-5xl font-serif text-blue">Zachary Ahmed</h1>
                    <p className="text-center text-3xl font-sans-serif">The person person</p>
                </container>
                <Link to='/about' className="text-xl font-serif text-blue text-center row-start-4 md: text-3xl row-start-5 mt-10 ml-10">About</Link>
                <Link to='/about' className="text-xl font-serif text-blue text-center col-start-2 row-start-4 md: text-3xl col-start-10 row-start-5 mt-10 mr-10">Contact</Link>
            </div>

            <div className="grid grid-rows-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 h-screen">

                <div className="col-start-1 md:col-start-2 col-span-2 xl:col-start-4">
                    <Project>
                        <h2>project 1</h2>
                    </Project>
                </div>
                <div className="col-start-1 h-20 md:col-start-3 col-span-2 row-start-2 lg:col-start-4 xl:col-start-6">
                    <Project>
                        <h2>project2</h2>
                    </Project>
                </div>
            </div>
        </div>
    </Layout> 
    )
}