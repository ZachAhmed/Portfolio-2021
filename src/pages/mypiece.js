import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import projectLayout from "../components/projectLayout"



function mypiece (props) {

    return (
        <Layout>
            <Helmet>
                <script src={withPrefix('script.js')} type="text/javascript"/>
            </Helmet>   
            
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 mx-5 mt-20">
                    <h1 className="col-span-4 text-3xl">Mypiece Design</h1>
                    <h3> Internship project</h3>

                    <h4 className=" font-sans-serif mt-4 font-semibold"> Timeline </h4>
                    <p> March 2016 - March 2017</p>

                    <h4 className=" font-sans-serif mt-4 font-semibold"> Responsibilities </h4>
                    <p>Wireframing / User-Flows / Mockups / User-Testing / Graphics / Product Design</p>

                    <h4 className=" font-sans-serif mt-4 font-semibold"> Team </h4>
                    <p> Zach Ahmed / Ryan Angelo </p>
                </div>
                <div className="mx-5 mt-6 row-start-2 col-span-3 text-2xl">
                    <p className=""> Mypiece is an app where users could buy meals at popular restaurants around the downtown core at a discounted price.  </p>
                </div>

            </Grid>
            <Grid>
                <div>

                </div>
            </Grid>
        </Layout>
    )
}

export default mypiece