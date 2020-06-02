import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'



function Project (props ) {
  const data = useStaticQuery(graphql`
    query Images {
      images: file(relativePath: {eq: "mp_thumb.png"}) {
        childImageSharp {
          fixed (width: 300) {
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
    <div className="border-6 border-blue rounded-md p-6 min-h-205 md:min-h-full p-3 col-gap-8" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="200">
      <h1 className="font-serif text-3xl text-blue ">{props.pTitle}</h1>
      <p className="font-sans-serif text-xl mt-4 text-blue leading-snug">{props.pDescription}</p>
      <div className="object-none object-center">
        <Img fixed={data.images.childImageSharp.fixed}/>
      </div>     
    </div>
  )
}

export default Project

