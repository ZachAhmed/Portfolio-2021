import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import sal from "sal.js"
import ProjectText from '../components/projectText'
import Highlight from '../components/projectHighlight'
import Info from "../components/projectInfo"

import pic1 from "../images/image1.jpg"
import pic2 from "../images/image2.jpg"
import pic3 from "../images/image3.jpg"

// Project Page Flow

// Challenge - Context of the project, Where the team was in the development process, What their goal was
// Approach - How I went about solving the problem, Research methods used adn why, 
// Results - What happened in the end? Was it what we expected? What would we do differently?

function mypiece (props) {

    return (
        <Layout>
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 mt-20 lg:col-start-3" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <Info
                        title='Cumulonimbus'
                        purpose='CEGEP final project'
                        timeline=' Jan 2015 - May 2015'
                        responsibilities='Interaction Design / Arduino Programming / Circuitry / Installation Design'
                        team='Zach Ahmed / Tiara Bucci / Kyle Gapulan / Matthiew Vaccariello '
                    />
                    <img className="mt-10 col-span-3" src={pic3} alt="Our cloud on display"/>
                    <figcaption className="text-sm">Our cloud on display</figcaption>
                </div>
                

                <div className="row-start-2 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 lg:col-start-3" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <ProjectText 
                        bigtext="Creative Computation / Interaction Design project based around interacting with something that is usually intangible"
                        bodytext="This interactive sculpture was my final project for the Interactive Media Arts program at Dawson College. My team wanted to make an interactive sculpture that would engage viewers in a public space by being interactive and playful."
                    />
                </div>
                

                <div className='row-start-3 col-span-3 lg:col-span-4 lg:col-start-3'>
                    <Highlight
                        heading='The Challenge'
                        p1='The brief was to come up with a project that was interactive or recative to be put on display somewhere on campus for students to view or interact with.'
                    />
                </div>

                <div className="mx-5 lg:mx-0 row-start-4 col-span-3 lg:col-span-4 lg:col-start-3" >
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Constraints</h3>
                    <p className="mt-3 lg:text-xl">Being the final for an interactive arts program, the only constraints that were given to us were that the project had to be interactive and leverage some kind of technology for it to be considered for display. We also discovered that our budget was another constraint since the </p>
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 lg:mt-10 lg:mx-0 row-start-1 col-span-3 lg:col-span-4 lg:col-start-3">
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The Approach</h3>
                    <p className="mt-3 lg:text-xl">The approach that we wanted to take involved leveraging the simplicity of the Arduino platform paired with an RFID shield, as well as nCloth simulations from Maya. We wanted to leverage these technologies to make simple interactions lead to significant change.</p>
                </div>

                <div className="mx-5 lg:mx-0 row-start-2 col-span-3 lg:col-span-4 lg:col-start-3">
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Process</h3>
                    <p className="mt-3 lg:text-xl">Our process started with researching different artists and installations for inspiration and to see what kind of work other people had done within the domain we wanted to work in. We came upon the work of Albert Omoss who works with 3D models and gives them strange effects. After that we looked at what kind of interactions and what kind of interface our viewers would interact with. We decided on sticking with a simple interaction to encourage the viewer to explore and play with minimal explanation to keep the effects a surprise. To facilitate simple interactivity, we opted to use an arduino paired with an RFID shield and readable RFID tags that we would embed within the objects that we wanted to use. </p>
                    <p className="mt-3 lg:text-xl">Once the code was mostly completed, we got to work on building the pedestal which would house the arduino and sensors, as well as some leds for decoration and feel. The pedestal was a simple square column which could house a 14” laptop and the arduino. It stood at about 4” tall and was made out of recycled plywood that was painted black.</p>
                    <p className="mt-3 lg:text-xl">From there we got to work on picking what objects we wanted to present. Patrick looked into the 3D modelling piece, and nCloth while I started to work on the arduino code. During programming the arduino, the biggest challenge that I faced was integrating it with Processing for video playback. </p>
                    <img className="col-span-3 mt-10" src={pic2} alt="Deformation example" />
                    <figcaption className="text-sm">Start of the deformation animation.</figcaption>

                    {/* Video goes here */}

                </div>
                <div className='row-start-3 col-span-3 lg:col-span-4 lg:col-start-3 lg:mb-10'>
                    <Highlight 
                        heading='Outcome' 
                        p1='The final outcome of our project was what we expected and had planned for. Our project worked exactly the way that we wanted it to.' 
                        p2='The feedback that we received was that the colours of our animation could have been more interesting instead of the monochromatic gray theme.'/>
                </div>
            </Grid>
            <Footer></Footer>
        </Layout>
    )
}

export default mypiece