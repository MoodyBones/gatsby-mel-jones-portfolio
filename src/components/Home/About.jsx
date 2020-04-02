import React from "react"
import styled from "@emotion/styled"
import { RichText } from "prismic-reactjs"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"
import Form from "../UI/Form"
import Image from "../../images/eva-test-only.png"

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
  grid-row-gap: 20em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 10em 0;
    grid-template-columns: 1fr;
    grid-row-gap: 10em;
  }

  a {
    color: ${colors.grey800};
    text-decoration: none;
    border-bottom: 2px solid ${colors.grey500};
    padding-bottom: 1px;

    :hover,
    :active {
      border-bottom: 2px solid ${colors.blue600};
    }
  }
`

const Tech = styled("div")`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-right: 8px solid ${colors.blue600};

  blockquote {
    margin: 0;
    padding: 0 2em 2em 0;
    font-size: 1.4em;
    text-align: right;
    letter-spacing: 1px;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 1 / 2;
    font-size: 0.8em;
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
`
const AboutImage = styled("div")`
  grid-column: -3 / -1;
  grid-row: 2 / 3;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-column: 2 / -1;
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

  div {
    text-align: right;
    padding-top: 2em;
  }
`

const Title = styled("div")`
  h4 {
    padding-bottom: 0.5em;
    text-align: right;
    color: ${colors.blue600};
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
  }

  p {
    margin-bottom: 2em;
    font-family: "Montserrat", sans-serif;
    line-height: 2.1;
    font-size: 1.1em;
    text-align: justify;
  }
`

const Emoji = styled("div")`
  grid-column: 1 / 2;
  grid-row: 4 / 5;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 5em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    justify-self: center;
    // flex-direction: row;
    // font-size: 2em;
  }
`

const ContactForm = styled("div")`
  grid-column: 2 / -1;
  grid-row: 4 / 5;

  justify-self: center;
  align-self: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-column: 2 / -1;
    grid-row: 3 / 4;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;
    grid-row: 5 / 6;
  }
`

const About = ({ title, bio, socialLinks }) => (
  <AboutGrid>
    <Tech>
      <blockquote>
        <b>Technology I use:</b> <br />
        Semantic HTML, (S)CSS, JavaScript (ES6+), React, Gatsby, GraphQL, Styled
        Components (Emotion), Codepen, VS Code & GitHub.
      </blockquote>
      <blockquote>
        <b> Workshops I have completed:</b> <br />
        TypeScript, Node, Express, Vue.js, MongoDB & Docker
      </blockquote>
    </Tech>
    <AboutImage>
      <img src={Image} width="598" height="599" />
      <div>
        Illustration by{" "}
        <a href="https://www.evagoncalves.com/">Eva Gonçalves</a>{" "}
      </div>
    </AboutImage>
    <Text>
      <Title>{RichText.render(title)}</Title>
      {RichText.render(bio)}
    </Text>
    <Emoji>
      <span>✨</span>
      <span>👩🏻‍💻</span>
      <span>🌴</span>
      <span>🚀</span>
      <span>✌️</span>
    </Emoji>
    <ContactForm id="anchor-contact-form">
      <Form />
    </ContactForm>
  </AboutGrid>
)

export default About
