import React from "react"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import Button from "components/_ui/Button"
import Art from "components/HeroArt"

const HeroSection = styled("section")`
  grid-column: 1 / -1;

  background: ${colors.blue600};
  color: ${colors.grey200};
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
    font-size: 4em;
    font-weight: 600;
    line-height: 1.2;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      // font-size: 1.9em;
    }
  }

  p {
    padding: 4em 0;

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
  border-radius: 3px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    // grid-column: 1 / span 1;
    // grid-row: 1 / 2;
    // justify-self: start;
    // align-self: center;
  }
`

const Hero = ({ title, buttonLink, buttonText }) => (
  <HeroSection>
    <HeroTitle>
      <h1 className="welcome-text">
        Heya, how's it going? I'm Mel Jones! An <i>Australian</i> born,
        <i> Berlin</i> based, self-taught <b>WEB DEV.</b>
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
      <Art />
    </HeroArt>
    {/* <HeroImage src={ImageHero} width="500" height="750" /> */}
  </HeroSection>
)

export default Hero

Hero.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
