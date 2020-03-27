import React from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Form from "components/_ui/Form"
import Image from "images/eva-test-only.png"

const AboutLayout = styled("div")`
  grid-column: 2 /-2;

  padding: 6em 0;

  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(auto-fit, auto);
  grid-column-gap: 2em;
  grid-row-gap: 4em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled("div")`
  grid-row: 1 / 2;
  grid-column: -2 / -1;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }

  h4 {
    font-size: 9em;
  }
`

const Text = styled("div")`
  grid-column: 1 / -2;
  grid-row: 2 / 3;

  column-count: 2;
  column-width: 150px;
  column-gap: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }

  p {
    font-family: "Montserrat", sans-serif;
    line-height: 2.1;
    letter-spacing: 2px;
    margin-bottom: 30px;
  }
`

const Quote = styled("div")``

const ContactForm = styled("div")`
  grid-column: -2 / -1;
  grid-row: 3 / 4;

  // justify-self: center;
  align-self: end;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 3 / 4;
  }
`

const AboutImage = styled("div")`
  grid-column: -2 / -1;
  grid-row: 2 / 3;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);
  }
`

const About = ({ title, bio, socialLinks }) => (
  <AboutLayout>
    <Title>{RichText.render(title)}</Title>
    <Text>{RichText.render(bio)}</Text>
    <Quote>
      <blockquote>
        I really enjoy connecting with a wide range of customers. I think
        listening, trust and a good team is very important. I care about the
        human side of things and the impact of technology in our society.
      </blockquote>
    </Quote>
    <ContactForm id="anchor-contact-form">
      <Form />
    </ContactForm>
    <AboutImage>
      <img src={Image} width="598" height="599" />
    </AboutImage>
  </AboutLayout>
)

export default About

About.propTypes = {
  title: PropTypes.string.isRequired,
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
