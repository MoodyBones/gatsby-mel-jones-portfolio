import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
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

  svg {
    max-width: 33px;
    height: auto;
    margin-bottom: 2em;
  }
`

const Social = () => (
  <SocialContainer>
    <Link to="https://github.com/MoodyBones">
      <IconTwitter />
    </Link>
    <Link to="https://github.com/MoodyBones">
      <IconInstagram />
    </Link>
    <Link to="https://github.com/MoodyBones">
      <IconLinkedIn />
    </Link>
    <Link to="https://github.com/MoodyBones">
      <IconGitHub />
    </Link>
  </SocialContainer>
)

export default Social
