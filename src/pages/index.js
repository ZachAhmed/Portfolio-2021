import React from "react"
import { Link } from "gatsby"
import Project from "../components/project"
import Grid from "../components/grid"
import Header from "../components/header"


export default function Index(){
    return(
    <div>
        <Grid>
            <Header/>
            <div class='text-left ml-10 mt-10 col-start-1 col-span-3 row-start-2'>
                <h1 class='font-serif text-4xl'>Zach Ahmed</h1>
                <h3 class='font-sans-serif text-xl mt-5'>A person person</h3>
            </div>
        </Grid>
        <Grid>    
            <Link to='/about' class="row-start-1 col-start-1 col-span-2 ml-10">
                <Project pTitle='Mypiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
            </Link>

            <Link to='/about' class="row-start-2 col-start-2 col-span-2 mr-10">
                <Project pTitle='Mypiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
            </Link>

            <Link to='/about' class="row-start-3 col-start-1 col-span-2 ml-10">
                <Project pTitle='Mypiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
            </Link>

            <Link to='/about' class="row-start-4 col-start-2 col-span-2 mr-10">
                <Project pTitle='Mypiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
            </Link>

            <Link to='/about' class="row-start-5 col-start-1 col-span-2 ml-10">
                <Project pTitle='Mypiece Case Study' pDescription='User experience & interface design project for a deal-finding app aimed at university students.'/>
            </Link>
        </Grid>
    </div>

    )
}