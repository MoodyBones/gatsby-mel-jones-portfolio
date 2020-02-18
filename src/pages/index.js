import React from "react"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import About from "components/About"
import Button from "components/_ui/Button"
import Form from "components/Form"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"
import ImageHero from "images/hero-mel-jones.png"
import ImageAbout from "images/eva-test-only.png"

const LayoutGridWrapper = styled("div")``

const HeroSection = styled("section")`
  grid-column: 2 / -2;

  padding-bottom: 6em;
  margin: 1em 0 6em 0;
  display: grid;
  grid-gap: 4em;
  grid-template-columns: repeat(3, minmax(150px, 320px)) 
  grid-template-rows: 150px auto 100px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin: 1em 0 4em 0;
    grid-column-gap: 0;
    grid-row-gap: 4em;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }

  a {
    grid-column: 3 / 4;
    grid-row: 3 / 4;
    justify-self: end;
    align-self: end;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      grid-column: 1 / span 1;
      grid-row: 3 / -1;
      justify-self: center;
      align-self: center;
    }
  }
`

const HeroZigZag = styled("div")`
  grid-column: 1 / 3;
  grid-row: 1 / 4;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 1 / 2;
  }

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

const HeroTitle = styled("div")`
  grid-column: 1 / 3;
  grid-row: 1 / 4;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 1 / 2;
  }

  z-index: -999;
  padding: 10em 1em 8em 2em;
  max-width: 640px;
  background: ${colors.grey900};
  border-radius: 3px;
  border-bottom: 1em solid ${colors.orange200};
  // box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.05);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 8em 0.8em 1em 1.2em;
  }

  h1 {
    margin-bottom: 1em;
    color: ${colors.grey500};
  }
`

const HeroSocial = styled("div")`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  justify-self: end;
  align-self: end;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 1 / 2;
  }
`

const HeroImage = styled("img")`
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  justify-self: start;
  align-self: start;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 2 / 3;
    justify-self: start;
    align-self: center;
  }

  width: 100%;
  height: auto;
  border-radius: 7.5px;
  border: 2em solid white;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

  // box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.05);
`

const WorkSection = styled("section")`
  grid-column: 2 / -2;

  padding-top: 6em;

  max-width: ${dimensions.maxwidthTablet}px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
  background-size: 100% 2px;
  background-position: center top;

  &:last-of-type {
    margin-bottom: 0;
  }
`
const WorkTitleContainer = styled("div")`
  text-align: center;
  margin-bottom: 6em;
`

const WorkAction = styled(Link)`
  padding: 8em 0 6em;
  margin-left: auto;
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

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

const AboutSection = styled("section")`
  grid-column: 1 / -1;
  background: ${colors.grey100};
  border-top: 2px solid ${colors.grey300};
`
const AboutWrapper = styled("div")`
  grid-column: 2 / -2;

  padding-top: 10em;
  padding-bottom: 10em;
  display: grid;
  grid-gap: 6em;
  grid-template-columns: repeat(3, minmax(150px, 320px)) 
  grid-template-rows: 200px auto 200px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column-gap: 0;
    grid-row-gap: 4em;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
  }
`

const AboutTitleContainer = styled("div")`
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 1 / 2;

    h4 {
      margin-bottom: 0.5em;
      font-size: 2.2em;
    }
  }

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
  background-size: 100% 2px;
  background-position: center bottom;
`

const AboutImageContainer = styled("div")`
  grid-column: 3 / 4;
  grid-row: 1 / 3;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 2 / 3;
  }
`

const AboutImage = styled("img")`
  width: 100%;
  height: auto;
`

const AboutTextContainer = styled("div")`
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  align-self: end;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-column: 1 / span 1;
    grid-row: 3 / 4;
  }
`

const AboutFormContainer = styled("div")`
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  align-self: end;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 4em 0;
    grid-column: 1 / span 1;
    grid-row: 4 / 5;
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
      <HeroSection>
        <HeroZigZag>
          <div className="zigzag"></div>
          <div className="zigzag2"></div>
        </HeroZigZag>
        <HeroTitle>{RichText.render(home.hero_title)}</HeroTitle>
        <HeroSocial>
          <span>SOCIAL LINKS</span>
        </HeroSocial>
        <HeroImage src={ImageHero} width="500" height="750" />
        <a
          href={home.hero_button_link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>{RichText.render(home.hero_button_text)}</Button>
        </a>
      </HeroSection>
      <WorkSection>
        <WorkTitleContainer>
          <h2>Featured Work</h2>
          <p>CSS • JavaScript • HTML</p>
        </WorkTitleContainer>
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
      </WorkSection>
      <AboutSection className="main-grid">
        <AboutWrapper>
          <AboutTitleContainer>
            {RichText.render(home.about_title)}
          </AboutTitleContainer>
          <AboutTextContainer>
            <About bio={home.about_bio} socialLinks={home.about_links} />
          </AboutTextContainer>
          <AboutImageContainer>
            <AboutImage src={ImageAbout} width="598" height="599" />
          </AboutImageContainer>
          <AboutFormContainer>
            <Form />
          </AboutFormContainer>
        </AboutWrapper>
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
