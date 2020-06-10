import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Project from "../components/project"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"


export default function Index(){
    return(
        <Layout>
            <Helmet>
                <script src={withPrefix('script.js')} type="text/javascript" />
            </Helmet>
            
            <Grid>
                <Header></Header>
                <div className='text-left mx-10 mt-10 col-start-1 col-span-3 row-start-2 text-blue md:col-start-2 col-span-5'>
                    <h1 className='font-serif text-5xl animated' data-sal="fade" data-sal-duration="0">Zach Ahmed</h1>
                    <h3 className='font-sans-serif text-2xl mt-5' data-sal="fade" data-sal-duration="0">Is a digital designer from Montréal, Québec. Passionate about designing intuitive user-interfaces, and UX design.</h3>
                </div>

                <Link to='/mypiece' className="row-start-4 col-start-1 col-span-2 ml-10 md:col-start-2 md:col-span-3 row-start-4 row-span-2">
                    <Project pTitle='MyPiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
                </Link>
                <Link to='/about' className="row-start-5 col-start-2 col-span-2 mr-10 md:col-start-5 md:row-start-4 col-span-3 row-span-2">
                    <Project pTitle='The Nature Of Things' pDescription='Creative computation project exploring how everyday objects might behave unexpectedly in an alternate reality.'/>
                </Link>
            </Grid>
            <div className='h-10 bg-white' id='space'></div>
            <Grid>    
                <Link to='/about' className="row-start-1 col-start-1 col-span-2 ml-10 md:col-start-2 row-span-2 col-span-3">
                    <Project pTitle='Cumulonimbus' pDescription='An interactive installation designed for display at Dawson college.'/>
                </Link>

                <Link to='/about' className="row-start-2 col-start-2 col-span-2 mr-10 md:row-start-1 col-start-5 row-span-2 col-span-3">
                    <Project pTitle='Assorted Graphics' pDescription="A collection of illustrations and logos I've designed while either freelancing, or on personal time."/>
                </Link>

                <Link to='/about' className="row-start-3 col-start-1 col-span-2 ml-10 md:col-start-2 col-span-3 row-span-2">
                    <Project pTitle='Cannabis Laws' pDescription='Data-Visualization project aimed at informing the public about cannabis bylaws in Montreal following legalization.'/>
                </Link>

                <Link to='/#top' className='font-serif text-3xl col-start-4 row-start-5 col-span-2 text-center my-20' data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="200">
                    <span className='un text-gray-500'>Back to top</span>
                </Link>
            </Grid>
            <Footer></Footer>
        </Layout>       
    )
}