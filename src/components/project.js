import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'



function Project (props ) {
  const data = useStaticQuery(graphql`
    query Images {
      images: file(relativePath: {eq: "name.png"}) {
        childImageSharp {
          fixed (width: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  
  `)

  console.log(data)
 

  return(
    <div className="border-4 border-blue rounded-md p-2 min-h-205 md:min-h-full p-3 col-gap-8" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="200">
      <h1 className="font-serif text-2xl text-blue">{props.pTitle}</h1>
      <p className="font-sans-serif text-xl mt-4 text-blue leading-snug">{props.pDescription}</p>
      <Img fixed={data.images.childImageSharp.fixed}/>
    </div>
  )
}

export default Project

