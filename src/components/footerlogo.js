import React from "react"
import {
  useStaticQuery,
  graphql
} from "gatsby"
import Img from "gatsby-image"

const FooterLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {
        eq: "soccerethiopiafooterlogo.png"
      }) {
        childImageSharp {
          fluid(maxWidth: 470) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid = {
    data.placeholderImage.childImageSharp.fluid
  }
  />
}

export default FooterLogo
