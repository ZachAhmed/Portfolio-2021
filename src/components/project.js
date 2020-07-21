import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

var data;

function Project (props) {
  data = useStaticQuery(graphql`
    query Images {
      image1: file(relativePath: {eq: "mp_thumb.png"}) {
        childImageSharp {
          fixed (width: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: {eq: "not2.png"}) {
        childImageSharp {
          fixed (width: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: {eq: "image3.jpg"}) {
        childImageSharp {
          fixed (width: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: {eq: "garden.png"}) {
        childImageSharp {
          fixed (width: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: {eq: "a2.png"}) {
        childImageSharp {
          fixed (width: 350) {
            ...GatsbyImageSharpFixed
          }
          fluid (maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log(data);

  return(
    <div className="border-6 border-blue rounded-md p-6 min-h-205 haha md:p-3 bg-slide overflow-hidden" data-aos="fade-up" data-aos-delay="100" data-aos-easing="ease-in-out-quad" data-aos-duration="500">
      <div className=" lg:h-32">
        <h1 className="font-serif text-3xl ">{props.pTitle}</h1>
        <p className="font-sans-serif text-xl mt-4 leading-snug">{props.pDescription}</p>
      </div>
      <div className="my-16 mx-10">
        {props.children} 
      </div>
    </div>
  )
}

export default Project

