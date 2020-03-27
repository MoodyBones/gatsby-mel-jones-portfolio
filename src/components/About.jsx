import React from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Form from "components/_ui/Form"
import Image from "images/eva-test-only.png"

const AboutGrid = styled("div")`
  grid-column: 2 /-2;

  padding: 20em 0;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(
      min-content,
      1fr
    );
  grid-template-rows: repeat(auto-fit, auto);
  grid-column-gap: 3.5em;
  grid-row-gap: 10em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
  }
`

const Title = styled("div")`
  h4 {
    padding-bottom: 0.5em;
    text-align: right;
    color: ${colors.blue600};
    @media (max-width: 1000px) {
      font-size: 7em;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 7em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 6em;
    }
  }
`
const AboutImage = styled("div")`
  grid-column: -3 / -1;
  grid-row: 2 / 3;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);
  }
`

const Text = styled("div")`
  grid-column: 1 / -1;
  grid-row: 3 / 4;

  column-count: 3;
  column-width: 150px;
  column-gap: 3.5em;

  @media (max-width: 900px) {
    column-count: 2;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2 / 3;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 3 / 4;

    column-count: 1;
    padding: 0 2em;
  }

  p {
    margin-bottom: 2em;
    font-family: "Montserrat", sans-serif;
    line-height: 2.1;
    font-size: 1.1em;
    text-align: justify;
  }
`

const Quote = styled("div")`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  blockquote {
    margin: 0;
    padding: 1em 2em 1em 0;
    font-size: 1.2em;
    text-align: right;
    border-right: 8px solid ${colors.blue600};
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 3 / 4;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`

const ContactForm = styled("div")`
  grid-column: -3 / -1;
  grid-row: 4 / 5;

  justify-self: center;
  // align-self: end;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 3 / 4;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
  }
`

const About = ({ title, bio, socialLinks }) => (
  <AboutGrid>
    <AboutImage>
      <img src={Image} width="598" height="599" />
      <span>
        Illustration by{" "}
        <a href="https://www.evagoncalves.com/">Eva Gonçalves</a>{" "}
      </span>
    </AboutImage>
    <Text>
      <Title>{RichText.render(title)}</Title>
      {RichText.render(bio)}
    </Text>
    <ContactForm id="anchor-contact-form">
      <Form />
    </ContactForm>
    <Quote>
      {/* <blockquote>
        I care about the human side of Software and the impact of Technology in
        our society.
      </blockquote> */}
      <blockquote>
        <b>When I code I use:</b> <br />
        Semantic HTML, (S)CSS, JavaScript (ES6+), React, Gatsby, Styled
        Components(Emotion), Node, Express, Studio Visual Code & GitHub.
      </blockquote>
      <blockquote>
        <b>I have completed workshops on:</b> <br />
        TypeScript, GraphQL, Vue.js, MongoDB & Docker
      </blockquote>
    </Quote>
  </AboutGrid>
)

export default About

About.propTypes = {
  title: PropTypes.string.isRequired,
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
