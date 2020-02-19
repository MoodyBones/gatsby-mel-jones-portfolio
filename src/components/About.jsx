import React from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"

const AboutContainer = styled("div")`
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: ${dimensions.maxwidthTablet}px) {
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-flow: column;
  }
`

const AboutBio = styled("div")`
  padding: 0.6em 0.8em 1em 1.2em;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.95); //white
  border-radius: 7.5px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }
`

const AboutActions = styled("div")`
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-top: 2em;
    align-self: center;
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
