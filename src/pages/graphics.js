import React from "react"
import { withPrefix, Link} from "gatsby"
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import sal from 'sal.js'

sal({
    once: true,
});

function mypiece (props) {
    return (
        <Layout>            
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 mx-5 mt-20" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <h1 className="col-span-4 text-3xl">Assorted Graphics</h1>
                    <h3 className="font-sans-serif text-2xl"> Personal Project</h3>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Timeline </h4>
                    <p> Varied </p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Responsibilities </h4>
                    <p>Visual Design / Logo Conception / Sketching</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Team </h4>
                    <p> Zach Ahmed </p>
                </div>
                <div className="mx-5 mt-3 row-start-2 col-span-3">
                    <h3 className="text-xl font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> A collection of illustrations and logos I've designed.</h3>
                </div>
            </Grid>
            <Footer/>
        </Layout>
    )
}

export default mypiece

