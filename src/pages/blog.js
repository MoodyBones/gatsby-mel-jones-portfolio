import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import PostCard from "components/PostCard"

const BlogWrapper = styled("section")`
  padding-bottom: 10em;
`

const BlogContainer = styled("div")`
  grid-column: 2 / -2;
`

const BlogTitle = styled("div")`
  margin: auto;
  padding: 1.5em 0;
  text-align: center;
  color: currentColor;

  h2 {
    margin: 0.5em 0;
  }

  p {
    color: ${colors.grey700};
    font-size: 1.25em;
    margin: 0;
  }
`

const BlogGrid = styled("div")`
  margin-top: 4em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 2.5em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-top: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin: 2em;
    grid-gap: 4em;
  }

  a:nth-child(1) {
    &:hover,
    :focus {
      border: 0.3em solid ${colors.blue600};
      transition: all 150ms ease-in-out;

      h3 {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(2) {
    &:hover,
    :focus {
      border: 0.3em solid ${colors.orange500};
      transition: all 150ms ease-in-out;

      h3 {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }

  a:nth-child(3) {
    &:hover,
    :focus {
      border: 0.3em solid ${colors.purple500};
      transition: all 150ms ease-in-out;

      h3 {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }

  a:nth-child(4) {
    &:hover,
    :focus {
      border: 0.3em solid ${colors.blue600};
      transition: all 150ms ease-in-out;

      h3 {
        color: ${colors.blue600};
        transition: all 150ms ease-in-out;
      }
    }
  }
  a:nth-child(5) {
    &:hover,
    :focus {
      border: 0.3em solid ${colors.orange500};
      transition: all 150ms ease-in-out;

      h3 {
        color: ${colors.orange500};
        transition: all 150ms ease-in-out;
      }
    }
  }

  a:nth-child(6) {
    &:hover,
    :focus {
      border: 0.3em solid ${colors.purple500};
      transition: all 150ms ease-in-out;

      h3 {
        color: ${colors.purple500};
        transition: all 150ms ease-in-out;
      }
    }
  }
`

const Blog = ({ posts, meta }) => (
  <>
    <Helmet
      title={`Blog`}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Blog | ${meta.title}`,
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
      <BlogWrapper className="main-grid">
        <BlogContainer>
          <BlogTitle>
            <h2>Blog</h2>
            <p>CSS • JavaScript • HTML</p>
          </BlogTitle>
          <BlogGrid>
            {posts.map((post, i) => (
              <PostCard
                key={i}
                author={post.node.post_author}
                category={post.node.post_category}
                title={post.node.post_title}
                date={post.node.post_date}
                description={post.node.post_preview_description}
                uid={post.node._meta.uid}
              />
            ))}
          </BlogGrid>
        </BlogContainer>
      </BlogWrapper>
    </Layout>
  </>
)

export default ({ data }) => {
  const posts = data.prismic.allPosts.edges
  const meta = data.site.siteMetadata
  if (!posts) return null

  return <Blog posts={posts} meta={meta} />
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    prismic {
      allPosts(sortBy: post_date_DESC) {
        edges {
          node {
            post_title
            post_date
            post_category
            post_preview_description
            post_author
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
