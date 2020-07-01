import React from 'react'
import Layout from './layout'


function projectText(props) {
    return(
        <Layout>
            <div>
                <h3 className="text-xl lg:text-2xl font-semibold" data-sal="slide-up" data-sal-easing='ease-in-out-sine'>{props.bigText}</h3>
                <p className="mt-3 lg:text-xl" data-sal="slide-up" data-sal-easing='ease-in-out-sine'> {props.bodyText}</p>
            </div>
        </Layout>
    )
} 

export default projectText