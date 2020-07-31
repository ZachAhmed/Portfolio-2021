import React, {useEffect} from "react"
import { withPrefix, Link} from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Project from "../components/project"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import AOS from "aos"

import 'aos/dist/aos.css';

import project1 from "../images/mp_thumb.png"
import project2 from "../images/not2.png"
import project3 from "../images/image3.jpg"
import project4 from "../images/garden.png"
import project5 from "../images/a2.png"

// {data.piece.childImageSharp.fluid}
// <Img fluid={data.image1.childImageSharp.fluid}

export default function Index (props) {
    

    return(
            <Layout>
                
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Zach Ahmed</title>
                    <link rel="canonical" href="http://zachahmed.com" />
                    <script src={withPrefix('script.js')} type="text/javascript" />
                </Helmet>
                <Grid>
                    <Header></Header>
                    <div className='text-left mx-10 mt-10 col-start-1 col-span-3 row-start-2 text-blue md:col-start-2 md:col-span-5'>
                        <h1 className='font-serif text-5xl animated'>Zach Ahmed</h1>
                        <h2 className='font-sans-serif text-2xl mt-5 lg:mb-24'>Is a digital designer from Montréal, Québec. Passionate about designing <br/> intuitive interfaces, and UX design.</h2>
                    </div>

                    <Link to='/mypiece' className="row-start-4 col-start-1 col-span-3 mx-10 md:col-start-2 ">
                        <Project 
                            pTitle='MyPiece Case Study' 
                            pDescription='User experience & interface design project for a deal-finding app aimed at university students.'
                            children={
                                <img src= {project1} alt="This is a project"/>
                            }
                        />
                        
                    </Link>

                    <Link to='/natureofthings' className="row-start-5 lg:row-start-4 col-start-1 lg:col-start-5 col-span-3 mx-10">
                        <Project 
                            pTitle='The Nature Of Things' 
                            pDescription='Creative computation project exploring how everyday objects might behave unexpectedly in an alternate reality.'
                            children={
                                <img src = {project2} alt="This is a project" />
                            }
                        />
                    </Link>
                </Grid>
                <div className='h-10 bg-white' id='space'></div>
                <Grid>    
                    <Link to='/cumulonimbus' className="row-start-1 lg:row-start-1 col-start-1 lg:col-start-2 col-span-3 mx-10 ">
                        <Project 
                            pTitle='Cumulonimbus' 
                            pDescription='An interactive installation designed for display at Dawson college.'
                            children={
                                <img src = {project3} alt="This is a project" />
                            }
                        />
                    </Link>

                    <Link to='/graphics' className="row-start-2 lg:row-start-1 col-start-1 lg:col-start-5 col-span-3 mx-10">
                        <Project 
                            pTitle='Assorted Graphics' 
                            pDescription="A collection of illustrations and logos I've designed while freelancing, or on personal time."
                            children={
                                <img src = {project4} alt="This is a project" />
                            }
                        />
                    </Link>

                    <Link to='/cannabislaws' className="row-start-3 lg:row-start-2 col-start-1 lg:col-start-2 col-span-3 mx-10">
                        <Project 
                            pTitle='Cannabis Laws' 
                            pDescription='Data-Visualization project aimed at informing the public about cannabis bylaws in Montreal following legalization.'
                            children={
                                <img src = {project5} alt="This is a project" />
                            }
                        />
                    </Link>

                    <Link to='/#top' className='font-serif text-3xl lg:col-start-4 row-start-5 col-span-3 lg:col-span-2 text-center my-20'>
                        <span className='un text-gray-500'>Back to top</span>
                    </Link>
                </Grid>
                <Footer></Footer>
            </Layout>
    )
}