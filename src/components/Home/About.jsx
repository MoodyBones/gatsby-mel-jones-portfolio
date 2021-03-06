import React from "react"
import styled from "@emotion/styled"
import { RichText } from "prismic-reactjs"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"
import Image from "../../images/eva-test-only.png"

const AboutGrid = styled("div")`
  grid-column: 2 /-2;

  padding: 10em 0;

  display: grid;
  grid-template-columns: minmax(min-content, 1fr) minmax(min-content, 1fr) minmax(
      min-content,
      1fr
    );
  grid-template-rows: repeat(auto-fit, auto);
  grid-column-gap: 3.5em;
  grid-row-gap: 20em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row-gap: 10em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 8em 0;
    grid-template-columns: 1fr;
    grid-row-gap: 10em;
  }

  a {
    color: ${colors.grey800};
    text-decoration: none;
    border-bottom: 2px solid ${colors.grey600};
    padding-bottom: 2px;

    :hover,
    :active {
      border-bottom: 2px solid ${colors.blue600};
    }
  }
`

const Tech = styled("div")`
  grid-column: 1 / 2;
  grid-row: 1 / 3;

  background-repeat: no-repeat;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ee65de),
    to(#26cbff)
  );
  background-image: linear-gradient(
    to bottom,
    ${colors.purple500},
    ${colors.blue500}
  );
  background-size: 3px 100%;
  background-position: bottom right;

  blockquote {
    margin: 0;
    padding: 0 2em 3em 0;
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
    text-align: left;
    color: ${colors.blue600};
    width: min-content;
  }
`

const Text = styled("div")`
  grid-column: 1 / -1;
  grid-row: 3 / 4;

  column-count: 3;
  column-width: 150px;
  column-gap: 4em;
  font-size: 0.95em;

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
    line-height: 2.1;
    font-size: 1.1em;
    color: ${colors.grey800};
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
  </AboutGrid>
)

export default About
