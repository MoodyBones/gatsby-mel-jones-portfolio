import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "../API/Link"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"

const SocialContainer = styled("nav")`
  .icon-social {
    font-size: 2em;
    transition: all 0.5s ease;

    &:hover,
    :active {
      transform: scale(1.4);
      transition: all 0.5s ease;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.grey800};
  }

  a:not(:last-child) {
    margin-right: 2.5em;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      margin-right: 2em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      margin-right: 1.5em;
    }
  }
`

const Social = () => (
  <SocialContainer>
    <Link href="https://twitter.com/_moodybones">
      <span>
        <FontAwesomeIcon className="icon-social" icon={["fab", "twitter"]} />
      </span>
    </Link>
    <Link href="https://www.instagram.com/moody.bones/">
      <span>
        <FontAwesomeIcon className="icon-social" icon={["fab", "instagram"]} />
      </span>
    </Link>
    <Link href="https://www.linkedin.com/in/mel-jones-4a5835182/">
      <span>
        <FontAwesomeIcon className="icon-social" icon={["fab", "linkedin"]} />
      </span>
    </Link>
    <Link href="https://codepen.io/MoodyBones">
      <span>
        <FontAwesomeIcon className="icon-social" icon={["fab", "codepen"]} />
      </span>
    </Link>
    <Link href="https://github.com/MoodyBones">
      <span>
        <FontAwesomeIcon className="icon-social" icon={["fab", "github"]} />
      </span>
    </Link>
  </SocialContainer>
)

export default Social
