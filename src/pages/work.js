import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"

const WorkWrapper = styled("section")`
  padding-bottom: 15em;
`

const WorkContainer = styled("div")`
  grid-column: 2 / -2;
`

const WorkTitle = styled("div")`
  margin: auto;
  padding: 1.5em 0;
  text-align: center;
  color: currentColor;

  h2 {
    margin: 0.5em 0;
  }

  p {
    color: ${colors.grey700};
    font-family: "Merriweather", serif;
    // border-top: 2px solid ${colors.grey400};
    font-size: 1.25em;
    margin: 0;
  }
`

const ProjectGrid = styled("div")`
  margin-top: 7em;
  display: grid;
  grid-gap: 6em;
  grid-auto-rows: 500px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 700px;
    grid-gap: 4em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 700px;
    grid-gap: 4em;
  }

  a:nth-child(1) {
    &:hover,
    :active {
      h3 {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(2) {
    &:hover,
    :active {
      h3 {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(3) {
    &:hover,
    :active {
      h3 {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(4) {
    &:hover,
    :active {
      h3 {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(5) {
    &:hover,
    :active {
      h3 {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(6) {
    &:hover,
    :active {
      h3 {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }

  .ProjectCardImageContainer:nth-child(2) {
    order: 99;
  }
`

const Work = ({ projects, meta }) => (
  <>
    <Helmet
      title={`Work`}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Work | ${meta.title}`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <Layout>
      <WorkWrapper className="main-grid">
        <WorkContainer>
          <WorkTitle>
            <h2>Work</h2>
            <p>CSS • JavaScript • HTML</p>
          </WorkTitle>
          <ProjectGrid>
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                category={project.node.project_category}
                title={project.node.project_title}
                description={project.node.project_preview_description}
                thumbnail={project.node.project_preview_thumbnail}
                uid={project.node._meta.uid}
              />
            ))}
          </ProjectGrid>
        </WorkContainer>
      </WorkWrapper>
    </Layout>
  </>
)

export default ({ data }) => {
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata
  if (!projects) return null

  return <Work projects={projects} meta={meta} />
}

Work.propTypes = {
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
