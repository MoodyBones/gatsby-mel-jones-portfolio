import React from "react"
import Link from "components/Link"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "images/logo-mel-jones.svg"
import SocialIcons from "components/SocialIcons"

const FooterContainer = styled("footer")`
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
`

const FooterBg = styled("div")`
  margin-top: 2px;
  grid-column: 1 / -1;
  background: ${colors.grey300};
`

const FooterWrapper = styled("div")`
  grid-column: 2 / -2;

  padding: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 0.8em;
    line-height: 2.5;
  }

  .heart-wrapped-emoji {
    margin-right: 0.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;

    nav {
      order: -1;
    }

    a {
      padding: 2em 0;
    }

    div {
      order: 99;
      text-align: center;
    }
  }
`

const FooterAuthor = styled("a")`
  text-decoration: none;

  .footer-logo {
    max-width: 120px;
    height: auto;
  }

  &:hover {
    .footer-logo {
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

const Footer = () => (
  <FooterContainer className="main-grid">
    <FooterBg>
      <FooterWrapper>
        <div>
          <span>Love saves the day!</span>
          <br />
          <span>©️ 2020 Mel Jones</span>
          <br />
          <span>Gatsby Starter by Marguerite Roth</span>
          <br />
          <span className="heart-wrapped-emoji">💝</span>
        </div>
        <SocialIcons />
        <FooterAuthor href="https://github.com/margueriteroth/gatsby-prismic-starter-prist">
          <img className="footer-logo" src={Logo} />
        </FooterAuthor>
      </FooterWrapper>
    </FooterBg>
  </FooterContainer>
)

export default Footer
