import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function Project (props) {
  const data = useStaticQuery(graphql`
    query Images {
      images: file(relativePath: {eq: "mp_thumb.png"}) {
        childImageSharp {
          fixed (width: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data)

  return(
    <div className="border-6 border-blue rounded-md p-6 min-h-205 md:min-h-full md:p-3 col-gap-10 bg-slide overflow-hidden" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in-out-quad" data-sal-duration="400">
      <div className="lg:h-32">
        <h1 className="font-serif text-3xl ">{props.pTitle}</h1>
        <p className="font-sans-serif text-xl mt-4 leading-snug">{props.pDescription}</p>
      </div>
      
      <div className="mt-10 ml-10">
        <Img fixed={data.images.childImageSharp.fixed}/>
      </div>
    </div>
  )
}

export default Project

