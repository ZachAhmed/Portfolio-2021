import React from "react"
import Layout from "../components/layout"


export default function About(){
    return(
    <Layout> 
        <div className="h-50 border-#0000ff border-40">
            <div className="grid grid-rows-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 h-screen">
                <container className="col-span-10 row-start-2 ">
                    <h1 className="text-center text-5xl">Zach Ahmed</h1>
                    <p className="text-center text-xl">The person person</p>
                </container>
            </div>
        </div>
    </Layout> 
    )
}