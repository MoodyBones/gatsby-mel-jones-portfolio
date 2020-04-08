import React from "react"
import Moment from "react-moment"
import Link from "../API/Link"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import PropTypes from "prop-types"

const PostCardContainer = styled(Link)`
  padding: 1em 1.6em 1em 2em;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: ${colors.grey700};
  background: ${colors.grey100};
  // border: 0.3em solid ${colors.grey100};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 20px; // this shows the border, how can i fix?
  transition: all 0.5s ease;

  &:hover,
  :focus {
    // border: 0.3em solid ${colors.orange500};

    h3 {
      color: ${colors.grey900};
    }
  }
`

const PostMetas = styled("div")`
  align-self: flex-end;
  font-size: 0.85em;
  font-weight: 700;
`

const PostDate = styled("div")`
  margin: 0;
`

const PostTitle = styled("h3")`
  margin: 1.2em 0 1em;
  color: ${colors.grey800};
  transition: color 0.5s ease;
`

const PostDescription = styled("div")`
  flex-grow: 2;
  color: ${colors.grey800};

  p {
    line-height: 1.2;
  }
`

const LineBreak = styled("div")`
  margin-top: 1.5em;
  border-top: 1px solid ${colors.grey400};
`

const PostCategory = styled("h6")`
  margin-top: 0.8em;
  letter-spacing: 1px;
  align-self: flex-end;
  transition: color 0.5s ease;
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
    <LineBreak></LineBreak>
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
