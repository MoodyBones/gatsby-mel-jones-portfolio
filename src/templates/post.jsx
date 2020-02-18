import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Moment from "react-moment"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import Layout from "components/Layout"

const PostWrapper = styled("section")``

const PostContainer = styled("div")`
  grid-column: 2 / -2;
`

const PostTitleContainer = styled("div")`
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  max-width: 550px;
  text-align: center;

  // @media (max-width: ${dimensions.maxwidthMobile}px);
  //  {
  //   width: 100%;
  // }
`

const PostTitle = styled("div")`
  max-width: 550px;

  h2 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
`

const PostCategory = styled("div")`
  color: ${colors.grey700};

  h5 {
    margin-top: 0;
    margin-bottom: 3em;
  }
`

const PostMetas = styled("div")`
  margin-top: 3em;
  margin-bottom: 3em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey800};
`

const PostAuthor = styled("div")``

const PostDate = styled("div")``

const PostHeroContainer = styled("div")`
  max-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3em;

  img {
    width: 100%;
  }
`

const PostHeroAnnotation = styled("div")`
  padding-top: 0.25em;

  h6 {
    text-align: right;
    color: ${colors.grey600};
    font-weight: 400;
    font-size: 0.85rem;
  }

  a {
    color: currentColor;
  }
`

const PostBody = styled("div")`
  max-width: 550px;
  margin: 0 auto;

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }
`

const BlogLink = styled(Link)`
  margin-top: 3em;
  display: block;
  text-align: center;
`

const Post = ({ post, meta }) => {
  return (
    <>
      <Helmet
        title={`${post.post_title[0].text}`}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `${post.post_title[0].text}`,
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
        <PostWrapper className="main-grid">
          <PostContainer>
            <PostTitleContainer>
              <PostTitle>{RichText.render(post.post_title)}</PostTitle>
              <PostCategory>{RichText.render(post.post_category)}</PostCategory>
              <PostMetas>
                <PostAuthor>{post.post_author}</PostAuthor>
                <PostDate>
                  <Moment format="MMMM D, YYYY">{post.post_date}</Moment>
                </PostDate>
              </PostMetas>
            </PostTitleContainer>
            {post.post_hero_image && (
              <PostHeroContainer>
                <img src={post.post_hero_image.url} alt="bees" />
                <PostHeroAnnotation>
                  {RichText.render(post.post_hero_annotation)}
                </PostHeroAnnotation>
              </PostHeroContainer>
            )}
            <PostBody>
              {RichText.render(post.post_body)}
              <BlogLink to={"/blog"}>
                <Button className="Button--secondary">Back to Blog</Button>
              </BlogLink>
            </PostBody>
          </PostContainer>
        </PostWrapper>
      </Layout>
    </>
  )
}

export default ({ data }) => {
  const postContent = data.prismic.allPosts.edges[0].node
  const meta = data.site.siteMetadata
  return <Post post={postContent} meta={meta} />
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  query PostQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
        edges {
          node {
            post_title
            post_hero_image
            post_hero_annotation
            post_date
            post_category
            post_body
            post_author
            post_preview_description
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
