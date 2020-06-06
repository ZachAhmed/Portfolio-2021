import React from "react"
import Layout from "./layout"
import Grid from "./grid"
import { Link } from "gatsby"

export default function Footer(props){
    return(
        <Layout>
            <div className="ml-64 grid grid-rows-1 text-blue md:grid-cols-12 max-h-100">
                <div className='col-span-4'>
                    <h3 className='text-xl font-serif text-left mb-1'> Thank you </h3>
                    <p className="mb-2 font-sans-serif">Thank you for scrolling through my portfolio. If you have any questions about any of work or just want to chat, please don't hesitate to reach out.</p>
                </div>

                <div className='col-start-6 col-span-4 text-blue'>
                    <h3 className='text-xl font-serif text-left mb-1'> Contact</h3>
                    <p className="mb-2 font-sans-serif">Email: zach.ahmed2@gmail.com</p>
                    <p className="mb-2 font-sans-serif">Phone: 514 690 1677</p>
                </div>

                <div className='col-start-9 col-span-4 text-blue'>
                    <h3 className='text-xl font-serif text-left mb-1'> Resume</h3>
                    <Link to=''> </Link>
                    <Link to=''> </Link>
                </div>

            </div>
        </Layout>
    )
}

