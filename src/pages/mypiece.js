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


import pic1 from "../images/image1.jpg"
import pic2 from "../images/image2.jpg"
import pic3 from "../images/image3.jpg"


// Project Page Flow

// Challenge - Context of the project, Where the team was in the development process, What their goal was
// Approach - How I went about solving the problem, Research methods used adn why, 
// Results - What happened in the end? Was it what we expected? What would we do differently?

function Mypiece (props) {

    return (
        <Layout>
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 mt-20 lg:col-start-3" >
                    <Info
                        title='Mypiece case study'
                        purpose='Contracted project'
                        timeline=' March 2016 - March 2017'
                        responsibilities='Wireframing / Prototyping / Product design / Mockups'
                        team='Zach Ahmed / Ryan Angelo'
                    />
                    <img className="mt-10 col-span-3" src={pic3} alt="Our cloud on display"/>
                    <figcaption className="text-sm">Our cloud on display</figcaption>
                </div>
                

                <div className="row-start-2 row-span-1 col-span-3 lg:col-span-4 mx-5 lg:mx-0 lg:col-start-3">
                    <ProjectText 
                        bigtext="Project done for the Mypiece team to improve the user experience of the app and to design features to start generating income."
                        bodytext="The mypiece app is a deal-finding app aimed at students and professionals to help them get deals on food. The from the app, the users could find exclusive deals from local restaurants and redeem them through the app when at the cash, like a coupon. The app was popular among students, because of cheap food, but it had low ratings on the Google Play Store and App Store."
                    />
                </div>
                

                <div className='row-start-3 col-span-3 lg:col-span-4 lg:col-start-3'>
                    <Highlight
                        heading='The Challenge'
                        p1='Because of the bad reviews, we had to improve user engagement by the revamping the experience. The parts of the app that I wanted to focus on were the redeption process, and the main page layout.
                        The project owners also wanted me to help design a feature that would start generating revenue for them.'
                    />
                </div>

                <div className="mx-5 lg:mx-0 row-start-4 col-span-3 lg:col-span-4 lg:col-start-3" >
                    <ProjectText
                        bigtext="Constraints"
                        bodytext="Because the company was so small, I had to work around a lot of contraints. The biggest ones were man-power and budget."
                        bodytext2="The product team consisted of me and the product owner, who isn't a designer, so while it was all collaborative the process was slow."
                        bodytext3="The team's budget was hard to work with because it limited our ability to research and test our users, and to get good developers. To get around this, we offered to pay the users that we interviewed to in food vouchers instead of money. The other effect that that had was that we didn't have very much data to go off of, so we iterated based on a lot of internal testing with other people around the office. "
                    />
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 lg:mt-10 lg:mx-0 row-start-1 col-span-3 lg:col-span-4 lg:col-start-3">
                    <ProjectText
                        bigtext='The Approach'
                        bodytext='The way we were going to work was that I was going to propose changes to existing pages, and then get approval for them from the project manager and then iterate designs on them. For new pages, I would collaborate with the PM to figure out what tasks the user would need to perform on that page and then list the requirements for it. From there I made a list of requirements, and started iterating on wireframes and mockups.'
                    />
                </div>

                <div className="mx-5 lg:mx-0 row-start-2 col-span-3 lg:col-span-4 lg:col-start-3">
                    <h3 className="font-semibold lg:text-2xl">Process</h3>
                    <p className="mt-3 lg:text-xl">Once we had an idea of what we were going make, we had to decide on what materials to use. Since this piece would be on display in public, we had to use materials that would be durable enough to withstand use, while also being budget friendly and eco-conscious. We found scraps of sheet metal from the metal shop that we used as the stem, and repurposed a wooden base from another project to house the arduino and power-supply. For the could itself, we decided on using polester stuffing and chicken-wire to mould the cloud cells.</p>
                    <p className="mt-3 lg:text-xl">We powered the cloud using an Arduino Mega, three capacitive-touch sensors and approximately 75 white leds. To actute the capacitive sensors, we decided to use metal washers we found and attached them to wires hanging from the cloud. This gave us a conductive material for users to touch, and the wires resembled rain.</p>
                    <p className="mt-3 lg:text-xl">After assembling all the materials we got to work on the build. I delegated shaping and putting together the frame to my other team-mates while I worked on the Arduino code. In between coding and shaping sessions we worked on soldering the LEDs into various groups that would be lit up when touched. To add a surprise factor, I added a function in the code so that after a certain number of touches, the cloud cells would flash in a random order. </p>
                    
                    <img className="mt-10 col-span-3" src={pic1} alt="The skeleton of the cloud"/>
                    <figcaption className="text-sm"> The build in progress.</figcaption>
                </div>
                <div className='row-start-3 col-span-3 lg:col-span-4 lg:col-start-3 lg:mb-10'>
                    <Highlight 
                        heading='Outcome' 
                        p1="We successfully managed to make a better in-app experience, while also managing to generate income through the redemption of deals. From app reviews, we found that some users appreciated the change to require a credit card, while some others didn’t. We also found that although people seemed to be enjoying the overall experience more, the app wasn’t working well on some android devices." 
                        p2="This project helped spark my passion for UX and UI design and forced me to learn a lot about designing for users while keeping business needs in mind. "/>
                </div>
                <div className='row-start-4 col-span-3 lg:col-span-4 lg:col-start-3'>
                    <iframe className="mr-5 lg:mr-0 mb-8 w-full col-span-3 lg:col-span-4 lg:col-start-3 lg:rounded-md" height="400" src="https://www.youtube.com/embed/JWNgJDIuRvk" frameBorder="0" allowfullscreen></iframe>
                </div>
            </Grid>
            <Footer></Footer>
        </Layout>
    );
}

export default Mypiece