import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import sal from "sal.js"

import pic1 from "../images/not1.jpg"
import pic2 from "../images/not2.png"
import pic3 from "../images/not3.png"
import projectText from "../components/projectText"


sal({
    once: true,
});

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
                    <h1 className="col-span-4 text-xl lg:text-4xl">The Nature of Things</h1>
                    <h3 className="font-sans-serif text-2xl"> University Final Project</h3>

                    <h4 className=" font-sans-serif mt-4 text-lg lg:text-2xl font-semibold"> Timeline </h4>
                    <p> Jan 2019 - April 2019</p>

                    <h4 className=" font-sans-serif mt-4 text-lg lg:text-2xl font-semibold"> Responsibilities </h4>
                    <p>3D Modelling / Programming / Arduino / Prototyping / Video-editing / Interaction-design</p>

                    <h4 className=" font-sans-serif mt-4 text-lg lg:text-2xl font-semibold"> Team </h4>
                    <p> Zach Ahmed / Patrick Vasile </p>

                    <img className="mt-10 col-span-3" src={pic1} alt="Interactive Installation Setup"/>
                    <figcaption className="text-sm">The installation setup</figcaption>
                </div>

                <div className="mx-5 lg:mx-0 mt-3 row-start-2 col-span-3 lg:col-span-4 lg:col-start-3">
                    <projectText
                    bigText="Creative Computation / Interaction Design project exploring how everyday objects might behave unexpectedly in an alternate reality."
                    bodyText="This installation was one of two final projects required to graduate from the Computation Arts program. My partner Patrick and I wanted to to explore how everyday objects behave in real life, and contrast it with how they might behave in a digital realm. Viewers of the installation were invited to approach a black pedestal, which had several objects laid out in front of it and to place one of them upon the pedestal. Once an object was placed on the pedestal, a video would be projected showing an everyday object behaving in extraordinary ways."
                    />
                </div>
                
                <div className="px-5 py-2 row-start-3 col-span-3 lg:col-span-4 lg:col-start-3 bg-lavender">
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The challenge</h3>
                    <p className="mt-3 lg:text-lg">My partner and I challenged ourselves to find a way to surprise users with interesting visuals, paired with simple interactions.</p>
                </div>

                <div className="mx-5 lg:mx-0 row-start-4 col-span-3 lg:col-span-4 lg:col-start-3" >
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Constraints</h3>
                    <p className="mt-3 lg:text-xl">The constraints that were presented to us in the project outline were that the project must be interactive and must be an art-piece. The other constraint that we discovered was budget, as we had to spend our own money on any supplies and materials that we needed. </p>
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 lg:mx-0 mt-10 row-start-1 col-span-3 lg:col-span-4 lg:col-start-3">
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The Approach</h3>
                    <p className="mt-3 lg:text-xl">The approach that we wanted to take involved leveraging the simplicity of the Arduino platform paired with an RFID shield, as well as nCloth simulations from Maya. We wanted to leverage these technologies to make simple interactions lead to significant change.    </p>

                    <h3 className="font-semibold mt-10 lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The goal</h3>
                    <p className="mt-3 lg:text-xl">Our goal was to have an interesting video play when a user would place an object upon the pedestal.</p>
                </div>

                <div className="mx-5 lg:mx-0 row-start-2 col-span-3 lg:col-span-4 lg:col-start-3">
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Process</h3>
                    <p className="mt-3 lg:text-xl">Our process started with researching different artists and installations for inspiration and to see what kind of work other people had done within the domain we wanted to work in. We came upon the work of Albert Omoss who works with 3D models and gives them strange effects. After that we looked at what kind of interactions and what kind of interface our viewers would interact with. We decided on sticking with a simple interaction to encourage the viewer to explore and play with minimal explanation to keep the effects a surprise. To facilitate simple interactivity, we opted to use an arduino paired with an RFID shield and readable RFID tags that we would embed within the objects that we wanted to use. </p>
                    <p className="mt-3 lg:text-xl">Once the code was mostly completed, we got to work on building the pedestal which would house the arduino and sensors, as well as some leds for decoration and feel. The pedestal was a simple square column which could house a 14” laptop and the arduino. It stood at about 4” tall and was made out of recycled plywood that was painted black.</p>
                    <p className="mt-3 lg:text-xl">From there we got to work on picking what objects we wanted to present. Patrick looked into the 3D modelling piece, and nCloth while I started to work on the arduino code. During programming the arduino, the biggest challenge that I faced was integrating it with Processing for video playback. </p>
                    <img className="col-span-3 mt-10" src={pic2} alt="Deformation example" />
                    <figcaption className="text-sm">Start of the deformation animation.</figcaption>
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 lg:col-span-4 lg:col-start-3 bg-lavender">
                    <h3 className="font-semibold lg:text-2xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Outcome</h3>
                    <p className="mt-3 lg:text-xl">The final outcome of our project was what we expected and had planned for. Our project worked exactly the way that we wanted it to.</p>
                    <p className="mt-3 lg:text-xl">The feedback that we received was that the colours of our animation could have been more interesting instead of the monochromatic gray theme.</p>
                </div>
                <iframe className="mr-5 lg:mr-0 mb-8 w-full col-span-3 lg:col-span-4 lg:col-start-3" height="400" src="https://www.youtube-nocookie.com/embed/hrjqjggidWs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
            <Footer></Footer>
        </Layout>
    )
}

export default mypiece