import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/Grid"
import Header from "../components/header"
import Footer from "../components/footer"


function mypiece (props) {

    return (
        <Layout>
            
            <Grid>
                <Header staticName="Zach Ahmed"></Header>
                <div className="row-start-1 row-span-1 col-span-3 mx-5 mt-20" data-aos="fade-up" data-aos-duration='800' data-aos-easing='ease-in-out-sine'>
                    <h1 className="col-span-4 text-3xl">Mypiece App</h1>
                    <h3 className="font-sans-serif text-2xl"> Internship</h3>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Timeline </h4>
                    <p> March 2016 - March 2017</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Responsibilities </h4>
                    <p>Wireframing / User-Flows / Mockups / User-Testing / Graphics / Product Design</p>

                    <h4 className=" font-sans-serif mt-4 text-lg font-semibold"> Team </h4>
                    <p> Zach Ahmed / Ryan Angelo </p>
                </div>
                <div className="mx-5 mt-3 row-start-2 col-span-3">
                    <h3 className="text-xl font-semibold" data-aos="fade-up" data-aos-easing='ease-in-out-sine'> Mypiece is an app where users could buy meals at popular restaurants around the downtown core at a discounted price.</h3>
                    <p className="mt-3" data-aos="fade-up" data-aos-easing='ease-in-out-sine'> Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 bg-lavender">
                    <h3 className="font-semibold" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>The challenge</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>

                <div className="mx-5 row-start-4 col-span-3">
                    <h3 className="font-semibold" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>Constraints</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>
            </Grid>
            <Grid>
                <div className="mx-5 mt-10 row-start-1 col-span-3">
                    <h3 className="font-semibold" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>Approach</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>

                    <h3 className="font-semibold mt-10" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>The goal</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>

                <div className="mx-5 row-start-2 col-span-3">
                    <h3 className="font-semibold" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>Process</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>

                <div className="px-5 py-2 row-start-3 col-span-3 bg-lavender">
                    <h3 className="font-semibold" data-aos="fade-up" data-aos-easing='ease-in-out-sine'>Outcome</h3>
                    <p className="mt-3">Reprehenderit cupidatat ut pariatur incididunt qui officia tempor aute amet eiusmod cillum tempor. Consequat nulla adipisicing quis incididunt ullamco esse incididunt qui culpa ad consectetur incididunt aliqua. Qui eiusmod nulla quis cupidatat labore officia. Duis voluptate exercitation labore cillum ullamco do ut sint veniam nisi sit ut exercitation. Labore aute exercitation deserunt proident veniam consectetur ullamco. </p>
                </div>
            </Grid>
            <Footer></Footer>
        </Layout>
    )
}

export default mypiece