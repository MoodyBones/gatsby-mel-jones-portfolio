import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const SocialContainer = styled("div")`
  margin-bottom: 3em;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2em;
  justify-content: space-evenly;
  width: 100%;
  max-width: 200px;

  a {
    text-decoration: none;
    color: ${colors.grey600};

    svg {
      margin 3em 0 2em;
      max-width: 50px;
      height: auto;

      // @media (max-width: ${dimensions.maxwidthMobile}px) {
      //   max-width: 40px;
      //   height: auto;
      // }
    }

    &:hover {
      cursor: pointer;
      transition: all 150ms ease-in-out;

      &:nth-of-type(1) {
        color: ${colors.orange600};
      }
      &:nth-of-type(2) {
        color: ${colors.green600};
      }
      &:nth-of-type(3) {
        color: ${colors.blue600};
      }
      &:nth-of-type(4) {
        color: ${colors.teal600};
      }
    }
  }
`

const Social = () => (
  <SocialContainer>
    <a
      href="https://twitter.com/_moodybones"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <FontAwesomeIcon icon={["fab", "twitter"]} />
      </span>
    </a>
    <a
      href="https://www.instagram.com/moody.bones/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </span>
    </a>
    <a
      href="https://www.linkedin.com/in/mel-jones-4a5835182/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
      </span>
    </a>
    <a
      href="https://codepen.io/MoodyBones"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <FontAwesomeIcon icon={["fab", "codepen"]} />
      </span>
    </a>
    <a
      href="https://github.com/MoodyBones"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>
        <FontAwesomeIcon icon={["fab", "github"]} />
      </span>
    </a>
  </SocialContainer>
)

export default Social
