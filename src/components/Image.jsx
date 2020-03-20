import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const Image = ({ input }) => (
  <Img fluid={input.primary.image.localFile.childImageSharp.fluid} />
)

export default Image

Image.propTypes = {
  data: PropTypes.object.isRequired,
}
