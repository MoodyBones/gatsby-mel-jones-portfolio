import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Logo from "components/_ui/Logo"
import Icon from "images/hero-mel-jones.png"
import SocialIcons from "components/SocialIcons"

const FooterContainer = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
`

const FooterWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: auto;
  margin-top: 2em;
`

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <SocialIcons />
    </FooterWrapper>
    <FooterAuthor href="https://github.com/margueriteroth/gatsby-prismic-starter-prist">
      ©️ 2020 Mel Jones | Gatsby Starter by Marguerite Roth <span>💝</span>
      Many thanks lovers!
      <FooterIcon className="FooterIcon" src={Icon} />
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
