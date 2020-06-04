import React from "react"
import Layout from "./layout"
import Grid from "./grid"

export default function Footer(props){
    return(
        <Layout>
            <div className=" mx-64 grid grid-rows-1 md:grid-cols-10">
                <div className='col-span-3'>
                    <h3 className='text-blue text-xl font-serif text-left mb-1'> Thank you </h3>
                    <p className="mb-2">Thank you for scrolling through my portfolio. If you have any questions about any of work or just want to chat, please don't hesitate to reach out.</p>
                </div>

                <div className='col-start-4 col-span-3'>
                    <h3 className='text-blue text-xl font-serif text-left mb-1'> Contact</h3>
                    <p className="mb-2">Thank you for scrolling through my portfolio. If you have any questions about any of work or just want to chat, please don't hesitate to reach out.</p>
                </div>

            </div>
        </Layout>
    )
}

