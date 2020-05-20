import React from "react"
import { withPrefix, Link } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"
import Grid from "../components/grid"
import Header from "../components/header"
import { Helmet } from "react-helmet"


export default function Index(){
    return(
        <Layout>
            <Helmet>
                <script src={withPrefix('script.js')} type="text/javascript" />
            </Helmet>
            <Grid>
                <Header id='top'></Header>
                <div className='text-left ml-10 mt-10 col-start-1 col-span-3 row-start-2 text-white'>
                    <h1 className='font-serif text-4xl animated' data-sal="fade" data-sal-duration="0">Zach Ahmed</h1>
                    <h3 className='font-sans-serif text-xl mt-5'>A person person</h3>
                </div>
            </Grid>
            <Grid>    
                <Link to='/about' className="row-start-1 col-start-1 col-span-2 ml-10">
                    <Project pTitle='MyPiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
                </Link>

                <Link to='/about' className="row-start-2 col-start-2 col-span-2 mr-10">
                    <Project pTitle='The Nature Of Things' pDescription='Creative computation project exploring how everyday objects might behave unexpectedly in an alternate reality.'/>
                </Link>

                <Link to='/about' className="row-start-3 col-start-1 col-span-2 ml-10">
                    <Project pTitle='Cumulonimbus' pDescription='An interactive installation designed for display at Dawson college.'/>
                </Link>

                <Link to='/about' className="row-start-4 col-start-2 col-span-2 mr-10">
                    <Project pTitle='Assorted Graphics' pDescription="A collection of illustrations and logos I've designed."/>
                </Link>

                <Link to='/about' className="row-start-5 col-start-1 col-span-2 ml-10">
                    <Project pTitle='Cannabis Laws' pDescription='Data-Visualization project aimed at informing the public about cannabis bylaws in Montreal following legalization.'/>
                </Link>

                <Link to='/#top' className='font-serif text-2xl row-start-6 w-screen text-center my-20 text-white' data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="150">Back to top</Link>
            </Grid>
        </Layout>       
    )
}


