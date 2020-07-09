import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectText from '../components/projectText'
import Highlight from '../components/projectHighlight'
import Info from "../components/projectInfo"

import sal from "sal.js"

import pic1 from "../images/pcove_phone.png"
import pic2 from "../images/not2.png"
import pic3 from "../images/not3.png"


sal({
    once: true,
});

// Project Page Flow

// Challenge - Context of the project, Where the team was in the development process, What their goal was
// Approach - How I went about solving the problem, Research methods used adn why, 
// Results - What happened in the end? Was it what we expected? What would we do differently?

function graphics (props) {

    return (
        <Layout>
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 mt-20 lg:col-start-3" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <Info
                        title='Assorted Graphics'
                        purpose='Freelance / Personal projects'
                        timeline='Varied'
                        responsibilities='Visual Design / Illustrator / Logo Design'
                        team='Zach Ahmed'
                    />
                </div>
                

                <div className="row-start-2 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 lg:col-start-3" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <div className="w-3/5 h-auto">
                        <img src={pic1} alt="kshs" />
                    </div>
                </div>
                
                <div className='row-start-3 col-span-3 lg:col-span-4 lg:col-start-3'>

                </div>

                <div className="mx-5 lg:mx-0 row-start-4 col-span-3 lg:col-span-4 lg:col-start-3" >
                    
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 lg:mx-0 mt-10 row-start-1 col-span-3 lg:col-span-4 lg:col-start-3">
                    <ProjectText
                        bigtext='The Approach'
                        bodytext='The approach that we wanted to take involved leveraging the simplicity of the Arduino platform paired with an RFID shield, as well as nCloth simulations from Maya. We wanted to leverage these technologies to make simple interactions lead to significant change.'
                    />
                </div>
                
                <div className="mx-5 lg:mx-0 row-start-2 col-span-3 lg:col-span-4 lg:col-start-3">
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Process</h3>
                    <p className="mt-3 lg:text-xl">Our process started with researching different artists and installations for inspiration and to see what kind of work other people had done within the domain we wanted to work in. We came upon the work of Albert Omoss who works with 3D models and gives them strange effects. After that we looked at what kind of interactions and what kind of interface our viewers would interact with. We decided on sticking with a simple interaction to encourage the viewer to explore and play with minimal explanation to keep the effects a surprise. To facilitate simple interactivity, we opted to use an arduino paired with an RFID shield and readable RFID tags that we would embed within the objects that we wanted to use. </p>
                    <p className="mt-3 lg:text-xl">Once the code was mostly completed, we got to work on building the pedestal which would house the arduino and sensors, as well as some leds for decoration and feel. The pedestal was a simple square column which could house a 14” laptop and the arduino. It stood at about 4” tall and was made out of recycled plywood that was painted black.</p>
                    <p className="mt-3 lg:text-xl">From there we got to work on picking what objects we wanted to present. Patrick looked into the 3D modelling piece, and nCloth while I started to work on the arduino code. During programming the arduino, the biggest challenge that I faced was integrating it with Processing for video playback. </p>
                    <img className="col-span-3 mt-10" src={pic2} alt="Deformation example" />
                    <figcaption className="text-sm mt-2">Start of the deformation animation.</figcaption>
                    <img className="col-span-3 mt-10" src={pic3} alt="Deformation example" />
                    <figcaption className="text-sm mt-2">End of the deformation animation.</figcaption>
                </div>
                <div className='row-start-4 col-span-3 lg:col-span-4 lg:col-start-3'>
                    <Highlight 
                        heading='Outcome' 
                        p1='The final outcome of our project was what we expected and had planned for. Our project worked exactly the way that we wanted it to.' 
                        p2='The feedback that we received was that the colours of our animation could have been more interesting instead of the monochromatic gray theme.'/>
                </div>
                <div className='row-start-5 col-span-3 lg:col-span-4 lg:col-start-3'>
                    <iframe className="mr-5 lg:mr-0 mb-8 w-full col-span-3 lg:col-span-4 lg:col-start-3 lg:rounded-md" height="400" src="https://www.youtube-nocookie.com/embed/hrjqjggidWs" frameBorder="0" allowfullscreen></iframe>
                </div>
            </Grid>
            <Footer></Footer>
        </Layout>
    )
}

export default graphics