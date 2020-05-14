import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


export default function Index(){
    return(
    <Layout> 
        <div className="h-100 w-screen border-blue border-40 fixed">
            <div className="grid grid-rows-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 h-screen">
                <container className="col-span-10 row-start-2 ">
                    <h1 className="text-center text-5xl font-serif text-blue">Zachary Ahmed</h1>
                    <p className="text-center text-3xl font-sans-serif">The person person</p>
                </container>
                <Link to='/about' className="text-3xl font-serif text-blue text-center row-start-5 mt-10 ml-10">About</Link>
                <Link to='/about' className="text-3xl font-serif text-blue text-center col-start-10 row-start-5 mt-10 mr-10">Contact</Link>
            </div>
            <div className="bg-red">

            </div>
        </div>
    </Layout> 
    )
}