import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "../API/Link"
import colors from "../../styles/colors"

const SocialContainer = styled("nav")`
  .icon-social {
    font-size: 2em;
    transition: all 0.5s ease;

    &:hover,:active {
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
  }

  //   &:hover,
  //   :focus {
  //     cursor: pointer;
  //     transition: all 150ms ease-in-out;

  //     &:nth-of-type(1) {
  //       color: ${colors.orange500};
  //     }
  //     &:nth-of-type(2) {
  //       color: ${colors.green500};
  //     }
  //     &:nth-of-type(3) {
  //       color: ${colors.purple500};
  //     }
  //     &:nth-of-type(4) {
  //       color: ${colors.teal500};
  //     }
  //     &:nth-of-type(5) {
  //       color: ${colors.blue600};
  //     }
  //   }
  // }
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
