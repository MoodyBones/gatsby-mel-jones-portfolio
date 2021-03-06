import React from "react"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"
import Link from "../API/Link"
import ProjectCard from "../Cards/ProjectCard"

const WorkGrid = styled("div")`
  grid-column: 2 / -2;

  padding-top: 10em;
  padding-bottom: 10em;
  display: grid;
  grid-column-gap: 10em;
  grid-row-gap: 6em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, auto);

  @media (max-width: 1000px) {
    grid-column-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-column-gap: 4em;
    grid-row-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 6em;
    padding-bottom: 6em;
    grid-template-columns: 1fr;
    grid-row-gap: 6em;
  }
`

const WorkTitle = styled("div")`
  grid-column: 1 / -1;
  justify-self: end;

  h4 {
    color: ${colors.orange500};
    text-align: right;
    max-width: min-content;
  }

  // @media (max-width: ${dimensions.maxwidthMobile}px) {
  //   grid-column: 1 / -1;
  // }
`

const WorkAction = styled(Link)`
  grid-column: 1 / -1;
  justify-self: end;
  align-self: end;
  font-size: 1.8em;
  font-weight: 600;
  letter-spacing: -1px;
  text-decoration: none;
  color: ${colors.grey800};
  transition: all 0.5s ease;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;

    span {
      color: ${colors.orange500};
    }
  }

  &:hover {
    color: ${colors.orange500};

    span {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    justify-self: center;
    font-size: 2em;
  }
`

const CurrentWork = ({ projects }) => (
  <WorkGrid>
    <WorkTitle>
      <h4>my current WORK</h4>
    </WorkTitle>
    {projects.slice(-2).map((project, i) => (
      <ProjectCard
        key={i}
        category={project.node.project_category}
        title={project.node.project_title}
        description={project.node.project_preview_description}
        thumbnail={project.node.project_preview_thumbnail}
        uid={project.node._meta.uid}
      />
    ))}
    <WorkAction to={"/work"}>
      <span>
        See more work<span>&#8594;</span>
      </span>
    </WorkAction>
  </WorkGrid>
)

export default CurrentWork
