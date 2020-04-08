import React from "react"
import styled from "@emotion/styled"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"
import HeroImage from "../../images/image.png"
import Link from "../API/Link"

const HeroGrid = styled("div")`
  grid-column: 2 / -2;

  padding-top: 4em;
  display: grid;
  grid-template-columns: repeat(6, minmax(min-content, 1fr));
  grid-template-rows: repeat(6, auto);
  grid-row-gap: 3em;
  color: ${colors.grey800};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-column: 1 / -1;

    grid-template-columns: 5em 1fr 5em;
    grid-template-rows: minmax(100px, 400px) auto auto;
    grid-row-gap: 4em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;

    padding-top: 2em;
    grid-template-columns: 1em 1fr 1em;
    grid-template-rows: 25vh auto auto;
  }

  .hero-img {
    grid-column: 1 / -1;
    grid-row: 1 / 2;

    overflow: hidden;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      grid-column: 1 / -1;
      grid-row: 1 / 3;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / -1;
      grid-row: 1 / 3;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
      object-fit: cover;
      border-radius: 3px;
      background: ${colors.grey100};
      box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 20px;

      @media (max-width: ${dimensions.maxwidthMobile}px) {
        transform: scale(1.1);
      }
    }
  }

  .hero-h {
    grid-column: 5 / -1;
    grid-row: 1 / 2;

    padding: 1em 0.8em;
    text-align: center;
    background: ${colors.grey200};
    box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 20px;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin-top: 0.6em;
    }

    p {
      color: ${colors.orange500};
      font-weight: 600;
      font-size: 1.2em;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      grid-column: 2 / -2;
      grid-row: 2 / 3;

      padding: 2.5em 3em 2em;
      justify-content: start;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 2 / -2;
      grid-row: 2 / 3;

      padding: 2.2em 0.8em 1.8em;
    }
  }

  .hero-p {
    grid-column: 2 / -2;
    grid-row: 3 / 4;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2em;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      grid-column: 2 / -2;
      grid-row: 3 / 4;
    }
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 2 / -2;
      grid-row: 3 / 4;

      font-size: 1.1em;
    }

    a {
      color: inherit;
      text-decoration: none;
      border-bottom: 2px solid ${colors.grey600};
      padding-bottom: 1px;
      transition: border 0.5s ease;

      :hover,
      :active {
        border-bottom: 2px solid ${colors.orange500};
      }
    }
  }
`

const Hero = ({ title, buttonLink, buttonText, content }) => (
  <HeroGrid>
    <div className="hero-h">
      <p>How's it going?</p>
      <h1>
        I'm Mel Jones, an Australian born, Berlin based, self-taught{" "}
        <b> WEB DEVELOPER!</b>
      </h1>
    </div>
    <div className="hero-img">
      <img
        src={HeroImage}
        alt="Mel Jones standing in the Jardin Majorelle botanical garden in sunny Marrakech, Morocco."
      />
    </div>
    <p className="hero-p">
      For the past 18 months my focus has been to learn all about Frontend
      Development. All of my progress is{"  "}
      <Link href="https://github.com/MoodyBones">
        public on <i> GitHub</i>
      </Link>
      , where you can follow along, offer guidance or{" "}
      <AnchorLink to="/#anchor-contact-form" title="Contact Mel">
        <b>hire me!</b>
      </AnchorLink>
    </p>
  </HeroGrid>
)

export default Hero
