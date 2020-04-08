import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import Hero from "components/Home/Hero"
import CurrentWork from "components/Home/CurrentWork"
import About from "components/Home/About"
import ContactForm from "components/Home/Form"

const LayoutGridWrapper = styled("div")``

const HeroSection = styled("section")`
  grid-column: 1 / -1;

  background: linear-gradient(${colors.grey100}, ${colors.grey200});
`

const WorkSection = styled("section")`
  grid-column: 1 / -1;
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

const ContactSection = styled("section")`
  grid-column: 1 / -1;
  padding: 6em 0;
  background: linear-gradient(${colors.grey100}, ${colors.grey200});

  .color-container {
    grid-column: 1 / -1;
    padding: 0.5em;
    justify-self: center;
    border-radius: 3px;
    background: linear-gradient(${colors.purple500}, ${colors.blue600});

    .form-container {
      background: linear-gradient(${colors.grey100}, ${colors.grey200});
      justify-self: center;
      border-radius: 3px;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding: 0.5em;
      // background: none;
    }
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
      <HeroSection className="main-grid">
        <Hero
          title={home.hero_title}
          buttonLink={home.hero_button_link.url}
          buttonText={home.hero_button_text}
          content={home.content}
        />
      </HeroSection>
      <WorkSection className="main-grid">
        <CurrentWork projects={projects} />
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
      <ContactSection id="anchor-contact-form" className="main-grid">
        <div className="color-container">
          <div className="form-container">
            <ContactForm />
          </div>
        </div>
      </ContactSection>
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
