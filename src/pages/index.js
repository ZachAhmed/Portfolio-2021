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
                <div className='text-left mx-10 mt-10 col-start-1 col-span-3 row-start-2 text-blue md:col-start-2 md:col-span-5'>
                    <h1 className='font-serif text-5xl animated' data-sal="fade" data-sal-duration="0">Zach Ahmed</h1>
                    <h3 className='font-sans-serif text-2xl mt-5' data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out-quad">Is a digital designer from Montréal, Québec. Passionate about designing intuitive user-interfaces, and UX design.</h3>
                </div>

                <Link to='/mypiece' className="row-start-4 col-start-1 col-span-3 mx-10 md:col-start-2 ">
                    <Project pTitle='MyPiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
                </Link>

                <Link to='/natureofthings' className="row-start-5 lg:row-start-4 col-start-1 lg:col-start-5 col-span-3 mx-10">
                    <Project pTitle='The Nature Of Things' pDescription='Creative computation project exploring how everyday objects might behave unexpectedly in an alternate reality.'/>
                </Link>
            </Grid>
            <div className='h-10 bg-white' id='space'></div>
            <Grid>    
                <Link to='/cumulonimbus' className="row-start-1 lg:row-start-1 col-start-1 lg:col-start-2 col-span-3 mx-10 ">
                    <Project pTitle='Cumulonimbus' pDescription='An interactive installation designed for display at Dawson college.'/>
                </Link>

                <Link to='/graphics' className="row-start-2 lg:row-start-1 col-start-1 lg:col-start-5 col-span-3 mx-10">
                    <Project pTitle='Assorted Graphics' pDescription="A collection of illustrations and logos I've designed while freelancing, or on personal time."/>
                </Link>

                <Link to='/cannabislaws' className="row-start-3 lg:row-start-2 col-start-1 lg:col-start-2 col-span-3 mx-10">
                    <Project pTitle='Cannabis Laws' pDescription='Data-Visualization project aimed at informing the public about cannabis bylaws in Montreal following legalization.'/>
                </Link>

                <Link to='/#top' className='font-serif text-3xl lg:col-start-4 row-start-5 col-span-3 lg:col-span-2 text-center my-20' data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="200">
                    <span className='un text-gray-500'>Back to top</span>
                </Link>
            </Grid>
            <Footer></Footer>
        </Layout>       
    )
}