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

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    align-items: center;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    align-items: center;
  }

  &:hover,
  :active {
    cursor: pointer;

    h3,
    span {
      color: ${colors.orange500};
    }

    .ProjectCardAction {
      span {
        transform: translateX(0px);
        opacity: 1;
      }
    }

    img {
      // filter: brightness(0.9);
      transform: scale(1.07);
    }
  }
`

const ProjectCardContent = styled("div")`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2em;
  padding-bottom: 5em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 1.5em 0;
    text-align: center;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1.5em 0;
    text-align: center;
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
  color: ${colors.grey900};
  transition: all 0.5s ease;
`

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0;
  margin-bottom: 3em;

  p {
    font-size: 1.3em;
    line-height: 1.2;
    color: ${colors.grey700};
  }
`

const ProjectCardAction = styled("span")`
  font-size: 0.9em;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${colors.grey700};
  transition: all 0.5s ease;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: all 0.5s ease;
  }
`

const ProjectCardImageContainer = styled("div")`
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

  img {
    width: 100%;
    height: 350px;
    transform: scale(1);
    object-fit: cover;
    transition: all 0.5s ease;
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
