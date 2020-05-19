import React from "react"
import { Link } from "gatsby"
import Project from "../components/project"
import Grid from "../components/grid"
import Header from "../components/header"


export default function Index(){
    return(
        <Grid>
            <Link to='/about'>
                <Project class="row-start-4" pTitle='Project1'>

                </Project>
            </Link>
        </Grid>  

    )
}