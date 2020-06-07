import React from "react"
import Layout from "./layout"


export default function Footer(props){

    return(
        <Layout>
            <div className="mx-64 grid grid-rows-1 text-blue border-t-2 border-blue pt-3 md:grid-cols-12 max-h-100">
                <div className='col-span-4' >
                    <h3 className='text-xl font-serif text-left mb-1'> Thank you </h3>
                    <p className="mb-2 font-sans-serif">Thank you for scrolling through my portfolio. If you have any questions about any of my work or just want to chat, please don't hesitate to reach out.</p>
                </div>

                <div className='col-start-6 col-span-3 text-blue'>
                    <h3 className='text-xl font-serif text-left mb-1'> Contact</h3>
                    <p className="mb-2 font-sans-serif">Email: zach.ahmed2@gmail.com</p>
                    <p className="mb-2 font-sans-serif">Phone: 514 690 1677</p>
                </div>

                <div className='col-start-9 col-span-3 text-blue'>
                    <h3 className='text-xl font-serif text-left mb-1'> External Links</h3>
                    <p className="mb-2 font-sans-serif"> <a href="Zach_Ahmed_resume.pdf" target="_blank" className="hover:underline"> Resume</a> </p>
                    <p className="mb-2 font-sans-serif"> <a className="hover:underline" href="https://www.linkedin.com/in/zachary-ahmed-design/" target='_blank'> LinkedIn</a></p>
                </div>
            </div>
        </Layout>
    )
}

