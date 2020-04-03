import React from "react"
import styled from "@emotion/styled"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"
import HeroImage from "../../images/image.png"
import Link from "../API/Link"

const HeroGrid = styled("div")`
  padding: 10em 3em;
  display: grid;
  grid-template-columns:
    minmax(min-content, 1fr) max-content minmax(min-content, 1fr)
    minmax(300px, 1fr);
  grid-template-rows: repeat(6, auto);
  grid-gap: 2em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 8em 1em;
    grid-template-columns: 1fr min-content;
    grid-column-gap: 1em;
    grid-row-gap: 5em;
  }

  h1:nth-child(1) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    justify-self: start;
    // color: ${colors.orange500};

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
    }
  }

  h1:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: start;
    color: ${colors.orange500};
    // font-weight: 600;
    writing-mode: vertical-rl;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 2 / -1;
      grid-row: 2 / 3;
    }
  }

  h1:nth-child(3) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    align-self: end;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / -1;
      grid-row: 3 / 4;
      text-align: right;
    }
  }

  .hero-p {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2em;
    color: ${colors.grey800};

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.1em;
    }
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / -1;
      grid-row: 5 / 6;
    }

    a {
      color: ${colors.grey800};
      text-decoration: none;
      border-bottom: 2px solid ${colors.grey500};
      padding-bottom: 1px;

      :hover,
      :active {
        border-bottom: 2px solid ${colors.orange500};
      }
    }
  }

  .hero-img {
    grid-column: 3 / 5;
    grid-row: 4 / -1;
    overflow: hidden;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
`

const Hero = ({ title, buttonLink, buttonText, content }) => (
  <HeroGrid>
    <h1>Heya, how's it going?</h1>
    <h1>I'm Mel Jones</h1>
    <h1>
      an Australian born, Berlin based, self-taught <b>WEB DEV.</b>
    </h1>
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
    <div className="hero-img">
      <img
        src={HeroImage}
        alt="Mel Jones standing in the Jardin Majorelle botanical garden in sunny Marrakech, Morocco."
      />
    </div>
  </HeroGrid>
)

export default Hero
