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
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import Image from "images/hero-mel-jones.png"

const Hero = styled("div")`
  margin: 2em 0 6em 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, auto);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin: 0.8em 0 4em 0;
    grid-template-rows: auto 80px auto 50px;
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
    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 6 / 12;
      grid-row: 2 / -1;
    }
  }

  a {
    grid-column: 9 / -1;
    grid-row: 3 / -1;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 2 / -1;
      grid-row: 4 / 5;
    }
  }
`
const HeroTitle = styled("div")`
  padding: .6em 6em .9em 2em;
  background: ${colors.grey900};
  border-radius: 7.5px;
  // box-shadow: 9px 9px 0 .5px ${colors.purple500};
  box-shadow: 6px 6px ${colors.blue600};
  // box-shadow: 6px 6px ${colors.blue600};
  // box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 1);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1em 1.2em 2em 1.8em;
  }

  h1 {
    margin-bottom: 1em;
    color: ${colors.grey100};

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.orange500};
      }
      &:nth-of-type(2) {
        color: ${colors.green500};
      }
      &:nth-of-type(3) {
        color: ${colors.blue500};
      }
      &:nth-of-type(4) {
        color: ${colors.purple500};
      }
      &:nth-of-type(5) {
        color: ${colors.teal500};
      }

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;

        &:nth-of-type(1) {
          color: ${colors.orange600};
          background-color: ${colors.orange200};
        }
        &:nth-of-type(2) {
          color: ${colors.green600};
          background-color: ${colors.green200};
        }
        &:nth-of-type(3) {
          color: ${colors.blue600};
          background-color: ${colors.blue200};
        }
        &:nth-of-type(4) {
          color: ${colors.purple600};
          background-color: ${colors.purple200};
        }
        &:nth-of-type(5) {
          color: ${colors.teal600};
          background-color: ${colors.teal200};
        }
      }
    }
  }
`

const HeroImage = styled("img")`
  width: 100%;
  height: auto;
  margin-top: 2em;
  border: 12px solid white;
  border-radius: 7.5px;
  box-shadow: 6px 6px ${colors.grey900};
  // box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
`

const SectionWork = styled("div")`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.grey200};

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
    color: ${colors.blue500};
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const SectionAbout = styled("div")`
  padding-top: 10em;
  margin-bottom: 10em;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.grey200};

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
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
    <Hero>
      <HeroTitle>{RichText.render(home.hero_title)}</HeroTitle>
      <HeroImage src={Image} width="500" height="750" />
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
      {RichText.render(home.about_title)}
      <About bio={home.about_bio} socialLinks={home.about_links} />
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
