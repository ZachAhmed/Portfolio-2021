import React from "react"
import { withPrefix, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Grid from "../components/grid"
import Header from "../components/header"
import Footer from "../components/footer"
import projectLayout from "../components/projectLayout"
import sal from 'sal.js'

sal({
    once: true,
});

function mypiece (props) {

    return (
        <Layout>
            <Helmet>
                <script src={withPrefix('script.js')} type="text/javascript"/>
            </Helmet>   
            <projectLayout
                projectname="Mypiece"
                projectType="Internship"
                timeline="March 2016 - March 2017"
            />
            
            <Footer></Footer>
        </Layout>
    )
}

export default mypiece