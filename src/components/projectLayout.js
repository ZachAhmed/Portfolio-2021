import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"



 function projectLayout (props) {
    return(
        <Layout>
            <Helmet>
                <script src={withPrefix('script.js')} type="text/javascript"/>
            </Helmet>   
            
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 mx-5 mt-20" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <h1 className="col-span-4 text-3xl">{props.projectname}</h1>
                    <h3 className="font-sans-serif text-2xl"> {props.projectType}</h3>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Timeline </h4>
                    <p> {props.dates}</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Responsibilities </h4>
                    <p>{props.responsibilities}</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Team </h4>
                    <p> {props.team} </p>
                </div>
                <div className="mx-5 mt-3 row-start-2 col-span-3">
                    <h3 className="text-xl font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> {props.projectDescription}</h3>
                    <p className="mt-3" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> {props.projectSummary} </p>
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 bg-lavender">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The challenge</h3>
                    <p className="mt-3">{props.challenge}</p>
                </div>

                <div className="mx-5 row-start-4 col-span-3">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Constraints</h3>
                    <p className="mt-3">{props.constraints}</p>
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 mt-10 row-start-1 col-span-3">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Approach</h3>
                    <p className="mt-3">{props.approach}</p>

                    <h3 className="font-semibold mt-10" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The goal</h3>
                    <p className="mt-3">{props.goal}</p>
                </div>

                <div className="mx-5 row-start-2 col-span-3">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Process</h3>
                    <p className="mt-3">{props.process}</p>
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 bg-lavender">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>Outcome</h3>
                    <p className="mt-3">{props.outcome}</p>
                </div>
            </Grid>
            <Footer></Footer>
        </Layout>
    )
 }