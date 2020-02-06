import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"
import Icon from "images/hero-mel-jones.png"
import SocialIcons from "components/SocialIcons"

const FooterContainer = styled("div")`
  padding-top: 3em;
  padding-bottom: 3em;
  background-repeat: no-repeat;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ee65de),
    to(#26cbff)
  );
  background-image: linear-gradient(
    to right,
    ${colors.purple500},
    ${colors.orange500}
  );
  background-size: 100% 2px;
  background-position: center top;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 2em;
  }
`

const FooterWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FooterAuthor = styled("a")`
  margin-top: 3em;
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  line-height: 3em;

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
  padding: 2em 0;
  max-width: 33px;
  height: auto;
`

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <SocialIcons />
      <Link to="/">
        <Logo />
      </Link>
    </FooterWrapper>
    <FooterAuthor href="https://github.com/margueriteroth/gatsby-prismic-starter-prist">
      Love saves the day!
      <span className="FooterIcon">💝</span>
      <FooterIcon className="FooterIcon" src={Icon} />
      ©️ 2020 Mel Jones | Gatsby Starter by Marguerite Roth
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
