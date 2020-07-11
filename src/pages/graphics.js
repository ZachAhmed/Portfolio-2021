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

import lighthouse from "../images/pcove_phone.png"
import garden from "../images/garden.png"
import barLogo from "../images/bar_logo.png"
import click from "../images/clicklogo.png"



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
                

                <div className="flex justify-center row-start-2 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 lg:col-start-3" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <div className="w-full lg:w-3/5 h-auto">
                        <img src={lighthouse} alt="lighthouse vector"/>
                        <figcaption> Illustration made for a poster.</figcaption>

                    </div>
                </div>
                
            </Grid>
            <Grid>
                <div className="mx-5 lg:mx-0 mt-10 row-start-1 col-span-3 lg:col-span-4 lg:col-start-3">
                    <div className="w-full">
                        <img src={garden} alt="vector garden" />
                        <figcaption> Vector illustration made in my spare time.</figcaption>
                    </div>
                </div>
                
                <div className="flex justify-center mx-5 lg:mx-0 mt-10 row-start-2 col-span-3 lg:col-span-4 lg:col-start-3">
                    <div className="w-1/2 -mr-10 lg:ml-20">
                        <img src={barLogo} alt="playroom gaming bar logo" />
                    </div>
                </div>
                <div className="flex justify-center mx-5 lg:mx-0 mt-10 row-start-3 col-span-3 lg:col-span-2 lg:col-start-4">
                    <div className="w-1/2 lg:w-full">
                        <img src={click} alt="click hostel logo"/>
                        <figcaption>Logos designed as part of branding concepts.</figcaption>
                    </div>
                </div>
                
            </Grid>
            <Footer></Footer>
        </Layout>
    )
}

export default graphics