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
                <div className="row-start-1 row-span-1 col-span-3 mx-5 mt-20" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <h1 className="col-span-4 text-3xl">The Nature of Things</h1>
                    <h3 className="font-sans-serif text-2xl"> University Final Project</h3>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Timeline </h4>
                    <p> Jan 2019 - April 2019</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Responsibilities </h4>
                    <p>3D Modelling / Programming / Arduino / Protoyping / Video-editing / Interaction-design</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Team </h4>
                    <p> Zach Ahmed / Patrick Vasile </p>

                    <img className="mt-10 col-span-3" src={pic1} alt="Interactive Installation Setup"/>
                </div>

                <div className="mx-5 mt-3 row-start-2 col-span-3">
                    <h3 className="text-xl font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Creative Computaton / Interaction Design project exploring how everyday objects might behave unexpectedly in an alternate reality.</h3>
                    <p className="mt-3" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> This installation was one of two final projects required to graduate from the Computation Arts program. My partner Patick and I wanted to to explore how everyday objects behave in real life, and contrast it with how they might behave in a digital realm. Viewers of the installation were invited to approach a black pedestal, which had several objects laid out in front of it and to place one of them upon the pedestal. Once an object was placed on the pedestal, a video would be projected showing an everyday object behaving in extraordinary ways.</p>
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 bg-lavender">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The challenge</h3>
                    <p className="mt-3">My partner and I challenged ourselves to find a way to surprise users with interesting visuals, paired with simple interactions.</p>
                </div>

                <div className="mx-5 row-start-4 col-span-3">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Constraints</h3>
                    <p className="mt-3">The constraints that were presented to us in the project outline were that the project must be interactive and must be an art-piece. The other constraint that we discovereed was buget, as we had to spend our own money on any supplies and materials that we needed. </p>
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 mt-10 row-start-1 col-span-3">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The Approach</h3>
                    <p className="mt-3">The approach that we wanted to take involved leveraging the simplicity of the Arduino platform paired with an RFID shield, as well as nCloth simulations from Maya. We wanted to leverage these technologies to make simple interactions lead to significant change.    </p>

                    <h3 className="font-semibold mt-10" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The goal</h3>
                    <p className="mt-3">Our goal was to have an intresting video play when a user would place an object upon the pedestal.</p>
                </div>

                <div className="mx-5 row-start-2 col-span-3">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Process</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                    <img className="col-span-3 mt-10" src={pic2} alt="Deformation example" />
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 bg-lavender">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Outcome</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>
                <iframe className="mr-5 mb-8 w-full col-span-3" height="300" src="https://www.youtube-nocookie.com/embed/hrjqjggidWs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Grid>
            <Footer></Footer>
        </Layout>
    )
}

export default mypiece