//Component imports
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


// picture imports
import pic1 from "../images/mtl.png"
import pic2 from "../images/a2.png"

// Project Page Flow

// Challenge - Context of the project, Where the team was in the development process, What their goal was
// Approach - How I went about solving the problem, Research methods used adn why, 
// Results - What happened in the end? Was it what we expected? What would we do differently?

function mypiece (props) {

    return (
        <Layout>
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 mt-20 lg:col-start-3" data-aos="fade-up" data-aos-duration='800' data-aos-easing='ease-in-out-sine'>
                    <Info
                        title='Montreal Cannabis Laws'
                        purpose='Data-visualization Project'
                        timeline='October 2018'
                        responsibilities='Data-visualization / HTML / CSS / JQuery / Wireframing / Interaction-design'
                        team='Zach Ahmed'
                    />
                    <img className="mt-10 col-span-3" src={pic1} alt="Interactive Installation Setup"/>
                    <figcaption className="text-sm">The main page</figcaption>
                </div>
                
                <div className='row-start-2 col-span-3 lg:col-span-4 lg:col-start-3'>
                    <Highlight
                        heading='The Challenge'
                        p1='For this project I had to visualize a data-set realated to a current event. Since the legalization of cannbis was the hottest topic, I decided to visualize the laws for each borough in Montreal. My goal was to allow people to find what laws apply to them whever they may be in an easy to navigate way.'
                    />
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 lg:mx-0 mt-10 row-start-1 col-span-3 lg:col-span-4 lg:col-start-3">
                    <projectText
                        bigText="The Approach"
                        bodyText="I wanted to practice my web development skills on this project so I decide to make an interactive website instead of a static infograph. I decided to leverage jQuery to make interacting with my SVG map easy. This was also my first time making an interactive SVG for a project. "
                    />
                </div>

                <div className="mx-5 lg:mx-0 row-start-2 col-span-3 lg:col-span-4 lg:col-start-3">
                    <h3 className="font-semibold lg:text-2xl" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>Process</h3>
                    <p className="mt-3 lg:text-xl">Since this project had to be about a current event, I wanted to stay local. So I started looking for interesting things happening around Montreal. The biggest discussion that everybody wanted to be a part of was the legalization of recreational cannabis. Based on my research it seemed that a lot of people were concerned or confused about the laws, particularly in Montreal, because each borough had the control to make their own by-laws regarding how they wanted to control the substance.</p>
                    <p className="mt-3 lg:text-xl">With that information I decided that I wanted to take an educational route and to inform the public about what new laws they may or may not be subject to. From there I started looking into what laws the Quebec government had put in place, and researching what laws the various boroughs of montreal had planned to put in place. </p>
                    <p className="mt-3 lg:text-xl">Once I gathered my data, I made an SVG map of Montreal and each individual borough so that I could interact with them on the web. </p>
                    <p className="mt-3 lg:text-xl">After my map was complete I started developing the website. I wanted to make it as simple as possible so that anybody who needed to use it could come across the information they needed. I styled the site in the same way as the actual SQDC site as if it were going to be included on their site. </p>
                    <img className="col-span-3 mt-10" src={pic2} alt="The map of Montreal and its boroughs" />
                    <figcaption className="text-sm">The interactive map</figcaption>
                </div>
                <div className='row-start-3 col-span-3 lg:col-span-4 lg:col-start-3'>
                    <Highlight 
                        heading='Outcome' 
                        p1="The outcome was that I made a site that is easy to use and that gives the users the information that they need as quickly and as easily as possible. I also learned a lot about how to use SVGs as interactive elements in a website. " 
                        p2="Although I am happy with how the site turned out, I do see some areas of opportunity. If I were to redo the project I would add the borough names on the map, in case someone who doesn't know the city well enough wants to find where they are. I would also add a function so that the page would scroll back up to the start of the laws section after the user clicks on the map."/>
                </div>
                <div className='row-start-4 col-span-3 lg:col-span-4 lg:col-start-3 bg-lavender -mt-12 px-5 py-5 lg:rounded-b-md lg:text-xl'>
                    <a href="http://montrealcannabislaws.6te.net/" className=" hover:underline text-md font-sans-serif" target="new"> View the project here</a>
                </div>

            </Grid>
            <Footer></Footer>
        </Layout>
    )
}

export default mypiece