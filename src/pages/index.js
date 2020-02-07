import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { RichText } from "prismic-reactjs"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Form from "components/ContactForm"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import ImageHero from "images/hero-mel-jones.png"

const Hero = styled("div")`
  padding-bottom: 10em;
  margin: 3em 0 6em 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto 100px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin: 1em 0 4em 0;
    grid-template-rows: 300px 150px 200px 100px;
  }

  div,
  img {
    grid-row: 1 / 3;
  }

  div {
    grid-column: 1 / 11;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / -1;
      grid-row: 1 / 3;
    }
  }

  img {
    grid-column: 10 / -1;
    align-self: center;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 6 / 12;
      grid-row: 2 / 4;
      align-self: end;
    }
  }

  a {
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    justify-self: end;
    align-self: end;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / -1;
      grid-row: 4 / 5;
      justify-self: center;
      align-self: end;
    }
  }
`
const HeroTitle = styled("div")`
  padding: 0.6em 6em 0.9em 2em;
  background: ${colors.grey900};
  border-radius: 7.5px;
  box-shadow: 6px 6px ${colors.blue600};

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1em 0.6em 2em 1em;
  }

  h1 {
    margin-bottom: 1em;
    color: ${colors.grey300};
  }
`

const HeroImage = styled("img")`
  width: 100%;
  height: auto;
  margin-top: 2em;
  border-radius: 7.5px;
  box-shadow: 6px 6px ${colors.green500};
  // box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
`

const SectionWork = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  &:last-of-type {
    margin-bottom: 0;
  }
`

const WorkAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;
  margin-left: auto;
  padding-bottom: 4em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 0 auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: ${colors.orange500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const SectionAbout = styled("div")`
  // padding-top: 10em;
  margin-bottom: 10em;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-template-rows: 500px auto;
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-rows: 300px auto;
  }
`

const AboutTitleContainer = styled("div")`
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  align-self: end;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / -1;
    h4 {
      margin-bottom: 0.5em;
      font-size: 2.2em;
    }
  }
`

const AboutFormContainer = styled("div")`
  grid-column: 2 / -1;
  grid-row: 1 / -1;
`

const AboutTextContainer = styled("div")`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
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
    <Hero>
      <HeroTitle>{RichText.render(home.hero_title)}</HeroTitle>
      <HeroImage src={ImageHero} width="500" height="750" />
      <a
        href={home.hero_button_link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>{RichText.render(home.hero_button_text)}</Button>
      </a>
    </Hero>
    <SectionWork>
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
      <WorkAction to={"/work"}>
        See more work <span>&#8594;</span>
      </WorkAction>
    </SectionWork>
    <SectionAbout>
      <AboutTitleContainer>
        {RichText.render(home.about_title)}
      </AboutTitleContainer>
      <AboutTextContainer>
        <About bio={home.about_bio} socialLinks={home.about_links} />
      </AboutTextContainer>
      <AboutFormContainer>
        <Form />
      </AboutFormContainer>
    </SectionAbout>
  </>
)

export default ({ data }) => {
  //Required check for no data being returned
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
