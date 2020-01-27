import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import IconTwitter from "components/_ui/TwitterIcon"
import IconInstagram from "components/_ui/InstagramIcon"
import IconLinkedIn from "components/_ui/LinkedInIcon"
import IconGitHub from "components/_ui/GitHubIcon"

const SocialContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 2em;
  justify-content: space-evenly;
  width: 100%;
  max-width: 200px;

  a {
    text-decoration: none;
    color: ${colors.grey800};

    svg {
      margin-top: 2em;
      max-width: 50px;
      height: auto;

      @media (max-width: ${dimensions.maxwidthMobile}px) {
        max-width: 40px;
        height: auto;
      }
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
      <IconTwitter />
    </a>
    <a
      href="https://www.instagram.com/moody.bones/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconInstagram />
    </a>
    <a
      href="https://www.linkedin.com/in/mel-jones-4a5835182/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconLinkedIn />
    </a>
    <a
      href="https://github.com/MoodyBones"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconGitHub />
    </a>
  </SocialContainer>
)

export default Social
