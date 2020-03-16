import React from "react"
import Link from "components/Link"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"

const ProjectCardContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: currentColor;
  text-decoration: none;
  padding-bottom: 20em;

  &:not(:last-child) {
    border-bottom: 2px solid ${colors.grey400};
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid transparent;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid transparent;
  }

  &:hover,
  :active {
    transition: all 150ms ease-in-out;
    cursor: pointer;

    h3 {
      color: ${colors.orange500};
      transition: all 150ms ease-in-out;
    }

    .ProjectCardAction {
      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    img {
      opacity: 0.8;
      // contrast: 0;
    }
  }
`

const ProjectCardContent = styled("div")`
  padding: 1.5em 3em;
  position: relative;
  text-align: left;
  width: 600px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 1.5em 1em;
    text-align: center;
    width: auto;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1.5em 1em;
    text-align: center;
    width: auto;
  }
`

const ProjectCardCategory = styled("h6")`
  color: ${colors.grey700};
  font-weight: 700;
  letter-spacing: 1.5px;
`

const ProjectCardTitle = styled("h3")`
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  font-family: "Merriweather", serif;
  font-weight: 900;
  color: ${colors.grey900};
  transition: all 150ms ease-in-out;
`

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0;
  margin-bottom: 3em;
  // border-bottom: 2px solid ${colors.grey400};

  p {
    font-size: 1.3em;
    line-height: 1.2;
    color: ${colors.grey700};
  }
`

const ProjectCardAction = styled("div")`
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${colors.grey700};
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const ProjectCardImageContainer = styled("div")`
  position: relative;
  display: flex;
  max-width: 600px;

  img {
    align-self: flex-end;
    max-width: 100%;
    height: 400px;
    object-fit: cover;

    opacity: 1;
    transition: opacity 0.5s;

    // filter: contrast(1);
    // transition: contrast 0.5s;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      align-self: flex-end;
      max-width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    img {
      align-self: flex-end;
      max-width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
`

const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
  <ProjectCardContainer to={`/work/${uid}`}>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      <img src={thumbnail.url} alt={title[0].text} width="500" height="750" />
    </ProjectCardImageContainer>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>{category[0].text}</ProjectCardCategory>
      <ProjectCardTitle>{title[0].text}</ProjectCardTitle>
      <ProjectCardBlurb>{RichText.render(description)}</ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
  </ProjectCardContainer>
)

export default ProjectCard

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
