import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Link from "components/Link"
import About from "components/About"
import Button from "components/_ui/Button"
import Hero from "components/Hero"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"

const LayoutGridWrapper = styled("div")``

const WorkSection = styled("section")`
  grid-column: 2 / -2;

  margin: 0 auto;
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`
const WorkTitleContainer = styled("div")`
  padding: 4em 0;
  text-align: center;
  max-width: ${dimensions.maxwidthTablet}px;
`

const WorkGrid = styled("div")`
  margin-top: 4em;
  display: grid;
  grid-column-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;

  @media (max-width: 1000px) {
    grid-column-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 2em;
    grid-column-gap: 4em;
    grid-row-gap: 2em;
  }

  a:nth-child(1) {
    & > div:first-of-type {
      background: ${colors.blue600};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }

  a:nth-child(2) {
    & > div:first-of-type {
      background: ${colors.orange500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(3) {
    & > div:first-of-type {
      background: ${colors.purple500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(4) {
    & > div:first-of-type {
      background: ${colors.blue600};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(5) {
    & > div:first-of-type {
      background: ${colors.orange500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(6) {
    & > div:first-of-type {
      background: ${colors.purple500};
    }

    &:hover,
    :active {
      h3,
      span {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }
`

const WorkAction = styled(Link)`
  margin-left: auto;
  padding: 4em 0 6em;
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 0.5s ease;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    font-size: 2.5em;
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.orange500};

    span {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`

const AboutSection = styled("section")`
  grid-column: 1 / -1;
  background: ${colors.grey100};
`

const AboutZigZag = styled("div")`
  grid-column: 1 / -1;

  .zigzag {
    height: 5em;
    background: linear-gradient(45deg, transparent 50%, ${colors.grey200} 50%),
      linear-gradient(90deg, transparent 50%, ${colors.purple500} 50%),
      linear-gradient(135deg, ${colors.grey200} 50%, ${colors.blue600} 50%),
      0 50%;
    background-repeat: repeat-x;
    background-size: 5em 5em, 5em 5em;
  }

  .zigzag2 {
    height: 5em;
    background: linear-gradient(-45deg, transparent 74%, ${colors.blue600} 75%),
      linear-gradient(45deg, transparent 74%, ${colors.purple500} 75%) 0 50%;
    background-repeat: repeat-x;
    background-size: 5em 5em, 5em 5em;
  }
`

const RenderBody = ({ home, projects, meta }) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
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
    <LayoutGridWrapper className="main-grid">
      <Hero
        title={home.hero_title}
        buttonLink={home.hero_button_link.url}
        buttonText={home.hero_button_text}
        content={home.content}
      />
      <WorkSection>
        <WorkTitleContainer>
          <h2>Featured Work</h2>
        </WorkTitleContainer>
        <WorkGrid>
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
        </WorkGrid>
        <WorkAction to={"/work"}>
          <span>
            See more work <span>&#8594;</span>
          </span>
        </WorkAction>
      </WorkSection>
      <AboutSection className="main-grid" id="anchor-about-section">
        <AboutZigZag>
          <div className="zigzag"></div>
          <div className="zigzag2"></div>
        </AboutZigZag>
        <About
          title={home.about_title}
          bio={home.about_bio}
          socialLinks={home.about_links}
        />
      </AboutSection>
    </LayoutGridWrapper>
  </>
)

export default ({ data }) => {
  // Required check for no data being returned
  const doc = data.prismic.allHomepages.edges.slice(0, 1).pop()
  const projects = data.prismic.allProjects.edges
  const meta = data.site.siteMetadata

  if (!doc || !projects) return null

  return (
    <Layout>
      <RenderBody home={doc.node} projects={projects} meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  home: PropTypes.object.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            hero_title
            hero_button_text
            hero_button_link {
              ... on PRISMIC__ExternalLink {
                _linkType
                url
              }
            }
            content
            about_title
            about_bio
            about_links {
              about_link
            }
          }
        }
      }
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
