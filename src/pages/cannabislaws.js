import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import sal from 'sal.js'
import ProjectText from "../components/projectText"

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
                <div className="row-start-1 row-span-1 col-span-3 mx-5 mt-20 lg:col-start-3" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <h1 className="col-span-4 text-3xl">Montreal Cannabis Laws Website</h1>
                    <h3 className="font-sans-serif text-2xl"> University Project</h3>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Timeline </h4>
                    <p> November 2018</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Responsibilities </h4>
                    <p>Data Visualization / Interface Design / Web Programming / Ux Design</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Team </h4>
                    <p> Zach Ahmed </p>
                </div>
                <div className="mx-5 mt-3 row-start-2 col-span-3">
                    <h3 className="text-xl font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Web project aimed at informing the public about cannabis bylaws in Montreal following legalization.</h3>
                    <p className="mt-3" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> </p>
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 bg-lavender">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The challenge</h3>
                    <p className="mt-3"></p>
                </div>
            </Grid>
            <ProjectText 
                bigtext='llorem'
                bodytext="llamsa"
            
            />
            <ProjectText 
                bigtext='llorem'
                bodytext="llamsa"
            
            />
            <ProjectText 
                bigtext='llorem'
                bodytext="llamsa"
            
            />
                
                
            <Footer></Footer>
        </Layout>
    )
}

export default mypiece