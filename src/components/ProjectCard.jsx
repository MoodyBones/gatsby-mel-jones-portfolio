import React from "react"
import Link from "components/Link"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import colors from "styles/colors"
import PropTypes from "prop-types"

const ProjectCardContainer = styled(Link)`
  margin-bottom: 10em;
  display: grid;
  grid-template-columns: 4fr 7fr;
  color: currentColor;
  text-decoration: none;
  // border: 1px solid ${colors.grey400};
  border-radius: 30px;
  background: ${colors.orange200};
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }

  // &:before {
  //   position: absolute;
  //   content: "";
  //   width: 100%;
  //   height: 100%;
  //   left: 0;
  //   top: 0;
  //   background: ${colors.grey500};
  //   mix-blend-mode: multiply;
  //   opacity: 0;
  //   transition: all 150ms ease-in-out;
  // }

  &:hover {
    // box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);

    // &:before {
    //   opacity: 0.2;
    //   transition: all 150ms ease-in-out;
    // }

    .ProjectCardAction {
      color: ${colors.orange500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .ProjectCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .ProjectCardImageContainer::before {
      // opacity: 0.2;
      filter: brightness(50%);
      transition: all 150ms ease-in-out;
    }
  }
`

const ProjectCardContent = styled("div")`
  background: ${colors.grey200};
  border-radius: 30px;
  padding: 2em 3em;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.blue500};
    border-radius: 30px;
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  @media (max-width: 950px) {
    padding: 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const ProjectCardCategory = styled("h6")`
  color: currentColor;
  letter-spacing: 1px;
`

const ProjectCardTitle = styled("h3")`
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  color: ${colors.blue600};
`

const ProjectCardBlurb = styled("span")`
  margin-bottom: 0.5em;
  margin-top: 0;
  margin-bottom: 5em;
  font-size: 1.25em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2.5em;
  }
`

const ProjectCardAction = styled("div")`
  font-size: 0.95em;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const ProjectCardImageContainer = styled("div")`
  background: ${colors.orange200};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  padding-left: 2em;
  padding-right: 2em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-top: 2em;
    max-height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: ${colors.grey500};
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      max-width: 300px;
    }
  }
`

const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
  <ProjectCardContainer to={`/work/${uid}`}>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>{category[0].text}</ProjectCardCategory>
      <ProjectCardTitle>{title[0].text}</ProjectCardTitle>
      <ProjectCardBlurb>{RichText.render(description)}</ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction">
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
    <ProjectCardImageContainer className="ProjectCardImageContainer">
      <img src={thumbnail.url} alt={title[0].text} />
    </ProjectCardImageContainer>
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
