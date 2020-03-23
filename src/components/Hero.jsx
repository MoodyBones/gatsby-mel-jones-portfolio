import React from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import Button from "components/_ui/Button"
import Art from "components/_ui/HeroArt"
import Img from "gatsby-image"
import HeroImage from "images/mel-jones.jpg"

const HeroSection = styled("section")`
  grid-column: 1 / -1;

  background: ${colors.grey100};
  color: ${colors.orange500};
  padding-top: 6em;
  padding-bottom: 6em;
  display: grid;
  grid-template-columns: 2fr 1fr;

  display: grid;
  grid-template-columns: repeat(9, minmax(1em, 1fr));
  grid-gap: 2em;
`

const HeroTitle = styled("div")`
  grid-column: 2 / -4;

  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }
  .welcome-text {
    opacity: 0.8;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.9em;
    }
  }

  p {
    padding: 4em 0;
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    line-height: 1.2s;
    color: ${colors.grey800};

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      // font-size: 0.9em;
    }
  }
  .hero-button {
    // align-self: end;
    // height: auto;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      // grid-column: 1 / span 1;
      // grid-row: 3 / -1;
      // justify-self: center;
      // align-self: center;
    }
  }
`

const HeroArt = styled("div")`
  grid-column: -4 / -1;

  width: 100%;
  height: auto;
  // border-radius: 3px;
  // box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);
  overflow: hidden;

  img {
    max-width: 100%
    height: auto;
    object-fit: cover;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    // grid-column: 1 / span 1;
    // grid-row: 1 / 2;
    // justify-self: start;
    // align-self: center;
  }
`

const Hero = ({ title, buttonLink, buttonText, content }) => (
  <HeroSection>
    <HeroTitle>
      <h1 className="welcome-text">
        Heya, how's it going? I'm Mel Jones! <br />
        An Australian born, Berlin based, self-taught <b>WEB DEV.</b>
      </h1>
      <p>
        All of my progress is public on <i> GitHub</i>, where you can follow
        along, offer guidance or <b>hire me!</b>
        <span> 👩‍💻</span>
        <span> 💖</span>
        <span> 👋</span>
      </p>
      {/* <a
        className="hero-button"
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>{RichText.render(buttonText)}</Button>
      </a> */}
    </HeroTitle>

    <HeroArt>
      <img src={HeroImage} width="500" height="750" />
      {/* // <Art /> */}
    </HeroArt>
  </HeroSection>
)

export default Hero

Hero.propTypes = {
  title: PropTypes.array.isRequired,
  buttonLink: PropTypes.array.isRequired,
  buttonText: PropTypes.array.isRequired,
  content: PropTypes.array.isRequired,
}
