import React from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"

const AboutContainer = styled("div")``

const AboutBio = styled("div")`
  padding: 0.6em 0.8em 1em 1.2em;
  max-width: 550px;
  background: rgba(255, 255, 255, 0.95); //white
  border-radius: 7.5px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

  p {
    line-height: 2.5;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }
`

const About = ({ bio, socialLinks }) => (
  <AboutContainer>
    <AboutBio>{RichText.render(bio)}</AboutBio>
  </AboutContainer>
)

export default About

About.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
