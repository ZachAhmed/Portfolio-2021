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
                <div className="row-start-1 row-span-1 col-span-3 mx-5 mt-20" data-sal="slide-up" data-sal-duration='800' data-sal-easing='ease-in-out-sine'>
                    <h1 className="col-span-4 text-3xl">Mypiece Design</h1>
                    <h3 className="font-sans-serif text-2xl"> Internship project</h3>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Timeline </h4>
                    <p> March 2016 - March 2017</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Responsibilities </h4>
                    <p>Wireframing / User-Flows / Mockups / User-Testing / Graphics / Product Design</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Team </h4>
                    <p> Zach Ahmed / Ryan Angelo </p>
                </div>
                <div className="mx-5 mt-3 row-start-2 col-span-3">
                    <h3 className="text-xl font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> Mypiece is an app where users could buy meals at popular restaurants around the downtown core at a discounted price.  </h3>
                    <p className="mt-3" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>

                <div className="mx-5 row-start-3 col-span-3 -mt-20">
                    <h3 className="font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>The problem space</h3>
                    <p className="mt-3">Sit dolore ex qui non magna voluptate pariatur ipsum duis id sit laborum consequat cupidatat. Reprehenderit anim esse velit nisi id cillum dolore adipisicing eu. Ad laborum dolor sit Lorem ex cupidatat cupidatat labore. Aliqua sit consectetur enim culpa eu adipisicing.</p>
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