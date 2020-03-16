import React from "react"
import Link from "components/Link"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"

const ProjectCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: currentColor;
  text-decoration: none;

  &:hover,
  :active {
    transition: all 150ms ease-in-out;
    cursor: pointer;

    h3 {
      color: ${colors.grey500};
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
  background: ${colors.blue600};
  padding: 1.5em 1em;
  position: relative;
  text-align: center;
`

const ProjectCardCategory = styled("h6")`
  color: ${colors.grey300};
  font-weight: 700;
  letter-spacing: 1.5px;
`

const ProjectCardTitle = styled("h3")`
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  font-family: "Merriweather", serif;
  font-weight: 900;
  color: ${colors.grey100};
  transition: all 150ms ease-in-out;
`

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0;
  margin-bottom: 3em;
  p {
    font-size: 1.3em;
    line-height: 1.2;
    color: ${colors.grey300};
  }
`

const ProjectCardAction = styled("div")`
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${colors.grey300};
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

  // height: 300px;
  // width: auto;
  // overflow: hidden;
  }

  img {
    align-self: flex-end;
    max-width: 100%;
    height: 300px;
    object-fit: cover;

    opacity: 1;   
    transition: opacity 0.5s;
    
    // filter: contrast(1);
    // transition: contrast 0.5s;


    // max-height: 100%;
    // width: auto;
    // overflow: hidden;
    // transform: scale(1.05);
    // object-fit: contain;
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
