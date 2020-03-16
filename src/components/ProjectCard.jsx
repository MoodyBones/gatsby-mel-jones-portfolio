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
  color: currentColor;
  text-decoration: none;
  margin-bottom: 2em;
  }

  &:hover, :active {
    transition: all 150ms ease-in-out;
    cursor: pointer;

    h3 {
      color: ${colors.grey500};
      transition: all 150ms ease-in-out;
    }

    .ProjectCardAction {
      color: ${colors.grey500};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }

    .ProjectCardImageContainer {
      img {
        filter: brightness 90%);
        transition: all 150ms ease-in-out;
      }
    }
  }
`

const ProjectCardContent = styled("div")`
  background: ${colors.blue600};
  padding: 2em 3em;
  position: relative;
  text-align: center;

  @media (max-width: 950px) {
    padding: 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const ProjectCardCategory = styled("h6")`
  color: ${colors.grey300};
  font-weight: 700;
  letter-spacing: 1.5px;
`

const ProjectCardTitle = styled("h3")`
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  // font-family: "Merriweather", serif;
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
  border-radius: inherit;
  display: flex;
  position: relative;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    max-width: 100%;
    height: auto;
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
      <img src={thumbnail.url} alt={title[0].text} width="500" height="750" />
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
