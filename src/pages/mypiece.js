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
                    <p className="mt-3 lg:text-xl">I started on this project by looking at the app as it was and Identifying areas where it obviously needed improvement. I saw two key areas that needed to be redone. The first was the home page. The layout was a simple one-column with full-width sections for each of the deals, but it looked cluttered which made it harder to tell what the deal was. My proposed solution was to divide each deal into its own card with more space on the top and bottom, and also to highlight the deal price by making the text bigger and a positive colour while showing the original price crossed out underneath.</p>
                    <p className="mt-3 lg:text-xl">The other thing that I wanted to focus on was the redemption process. Originally, the user would pick a deal that they wanted to redeem and proceed to the restaurant. Once at the restaurant, they would order what the deal included and then head to the cash. At the cash they would then open the deal page and hand the phone over to the cashier, who would press redeem for the customer. Although the process was simple enough, I found it to be invasive. To confirm my feelings, I asked 10 friends if they would be comfortable handing their phone over to a stranger. 8 of them said that they were not comfortable doing so, and the other two said that they didn’t really care. Some concerns that my friends brought up were: What if their hands are dirty? What if they drop it? What if they do something they’re not supposed to? This confirmed that the app needed a better system for users to redeem their deals.</p>
                    <p className="mt-3 lg:text-xl">I then brought my proposed changes to the project manager who gave me feedback on the changes and proposed some of their own. We started going through all the other pages of the app discussing the user-journey and how it could be improved. We also started talking about the new features we were going to design.</p>
                    <p className="mt-3 lg:text-xl">The flow of purchasing and redeeming a deal was the most significant change made to the app. As opposed to selecting a deal that a user wanted, and then handing their phone over to the cashier to be redeemed, users were now able to pay for their food through the app and head to the restaurant to pick it up. The cashier would only have to validate that the deal had been redeemed, so that it could not be used a second time.</p>
                    <p className="mt-3 lg:text-xl">The new purchasing flow would show the user all the important information that they would need to know like: exactly what the deal consisted of and the price, how much time they would have to redeem the deal, and a map of where the restaurant was located. Once the user decides that they want the deal, they would be directed to the order screen where they would choose how many of the item they want and if they would like to add any add-ons to their meal. The add ons were an important element in getting support from the restaurants, as they provided a way for them to sell smaller items without losing any margin.</p>
                    
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