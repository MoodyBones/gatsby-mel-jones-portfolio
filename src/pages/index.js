import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Link from "components/API/Link"
import About from "components/Home/About"
import Hero from "components/Home/Hero"
import Layout from "components/Layout"
import ProjectCard from "components/Cards/ProjectCard"

const LayoutGridWrapper = styled("div")``

const WorkSection = styled("section")`
  grid-column: 2 / -2;

  margin: 0 auto;
  padding: 6em 0 20em;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const HomeWorkGrid = styled("div")`
  margin-top: 4em;
  display: grid;
  grid-column-gap: 6em;
  grid-row-gap: 6em;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: repeat(auto-fit, auto);

  @media (max-width: 1000px) {
    grid-column-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 2em;
    grid-column-gap: 4em;
    grid-row-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-row-gap: 6em;
  }
`

const WorkTitleContainer = styled("div")`
  grid-column: 1 / 2;

  justify-self: end;

  max-width: min-content;

  h4 {
    color: ${colors.orange500};
    // text-align: right;
  }
`

const WhiteSpace = styled("div")`
  grid-column: 2 / 3;
`

const WorkAction = styled(Link)`
  grid-column: 1 / -1;
  justify-self: end;
  align-self: end;
  font-size: 2.5em;

  font-weight: 600;
  text-decoration: none;
  color: ${colors.grey800};
  transition: all 0.5s ease;

  span {
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

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    font-size: 2em;
    justify-self: center;
    color: ${colors.orange500};
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
        <HomeWorkGrid>
          <WorkTitleContainer>
            <h4>Some of my work</h4>
          </WorkTitleContainer>
          <WhiteSpace></WhiteSpace>
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
              See more work <span>&#8594;</span>
            </span>
          </WorkAction>
        </HomeWorkGrid>
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
