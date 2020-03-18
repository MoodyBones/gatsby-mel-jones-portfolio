import React from "react"
import Moment from "react-moment"
import Link from "components/Link"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import PropTypes from "prop-types"

const PostCardContainer = styled(Link)`
  padding: 1em 1.6em 1em 2em;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.grey300};
  background: ${colors.grey900};
  border: 0.3em solid ${colors.grey200};
  transition: all 150ms ease-in-out;

  &:hover,
  :focus {
    border: 0.3em solid ${colors.orange500};
    transition: all 150ms ease-in-out;

    h3 {
      color: ${colors.orange500};
      transition: all 150ms ease-in-out;
    }
  }
`

const PostMetas = styled("div")`
  align-self: flex-end;

  // display: flex;
  // justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
  font-weight: 700;
`

const PostDate = styled("div")`
  margin: 0;
`

const PostTitle = styled("h3")`
  margin: 0.5em 0;
  font-weight: 700;
`

const PostDescription = styled("div")`
  flex-grow: 2;
`

const PostCategory = styled("h6")`
  margin-top: 1em;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${colors.grey600};
  align-self: flex-end;
`

const PostCard = ({ author, category, date, title, description, uid }) => (
  <PostCardContainer className="BlogPostCard" to={`/blog/${uid}`}>
    <PostMetas>
      <PostDate>
        <Moment format="MMMM D, YYYY">{date}</Moment>
      </PostDate>
    </PostMetas>
    <PostTitle>{title[0].text}</PostTitle>
    <PostDescription>{RichText.render(description)}</PostDescription>
    <PostCategory>{category[0].text}</PostCategory>
  </PostCardContainer>
)

export default PostCard

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
