import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"

const WorkWrapper = styled("section")`
  padding-bottom: 10em;
`

const WorkContainer = styled("div")`
  grid-column: 2 / -2;
`

const WorkTitle = styled("div")`
  margin-bottom: 4em;
  text-align: center;

  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }

  p {
    margin: 0;
    color: ${colors.grey800};
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
          <>
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
          </>
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
