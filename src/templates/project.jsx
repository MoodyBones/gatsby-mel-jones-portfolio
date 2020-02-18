import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Button from "components/_ui/Button"
import Layout from "components/Layout"

const ProjectWrapper = styled("section")``

const ProjectContainer = styled("div")`
  grid-column: 2 / -2;
`

const ProjectHeroContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  padding-top: 2.25em;
  margin-bottom: 3.5em;

  img {
    max-width: 600px;
    border-radius: 3px;
    box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);
  }
`

const ProjectTitle = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-top: 1.5em;
    margin-bottom: 1em;
    padding-bottom: 0.8em;
    background-repeat: no-repeat;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ee65de),
      to(#26cbff)
    );
    background-image: linear-gradient(
      to right,
      ${colors.purple500},
      ${colors.orange500}
    );
    background-size: 30px 2px;
    background-position: center bottom;
  }
`

const ProjectBody = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  padding-top: 1em;

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }
`

const WorkLink = styled(Link)`
  margin-top: 3em;
  display: block;
  text-align: center;
`

const Project = ({ project, meta }) => {
  return (
    <>
      <Helmet
        title={`${project.project_title[0].text}`}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `${project.project_title[0].text}`,
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
        <ProjectWrapper className="main-grid">
          <ProjectContainer>
            <ProjectTitle>
              {RichText.render(project.project_title)}
            </ProjectTitle>
            {project.project_hero_image && (
              <ProjectHeroContainer>
                <img src={project.project_hero_image.url} alt="bees" />
              </ProjectHeroContainer>
            )}
            <ProjectBody>
              {RichText.render(project.project_description)}
              <WorkLink to={"/work"}>
                <Button className="Button--secondary">See other work</Button>
              </WorkLink>
            </ProjectBody>
          </ProjectContainer>
        </ProjectWrapper>
      </Layout>
    </>
  )
}

export default ({ data }) => {
  const projectContent = data.prismic.allProjects.edges[0].node
  const meta = data.site.siteMetadata
  return <Project project={projectContent} meta={meta} />
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            project_hero_image
            project_description
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
