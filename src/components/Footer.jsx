import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import Icon from "images/icon-mel.png"
import SocialIcons from "components/SocialIcons"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 80px;
  }
`


const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;
  line-height: 2em;

  &:hover {
    color: ${colors.blue900};

    .FooterIcon {
      animation-name: rotate;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const FooterIcon = styled("img")`
  max-width: 33px;
  margin-top: 2em;
`

const Footer = () => (
  <FooterContainer>
    <SocialIcons />
    <Link to="/">
      <Logo />
    </Link>
    <FooterAuthor href="https://github.com/margueriteroth/gatsby-prismic-starter-prist">
      ©️ 2020 Mel Jones ✨ Gatsby Starter by Marguerite Roth <span>💝</span>
      Many thanks lovers!
      <FooterIcon className="FooterIcon" src={Icon} />
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
