import React from "react"
import Link from "components/Link"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "images/logo-mel-jones.svg"
import SocialIcons from "components/SocialIcons"

const FooterContainer = styled("footer")`
  padding: 5em 3em;
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
    ${colors.orange500},
    ${colors.purple500}
  );
  background-size: 100% 1px;
  background-position: center top;
`

const FooterWrapper = styled("div")`
  grid-column: 1 / -1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: 0.95em;
    line-height: 2.5;
    letter-spacing: -1px;
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
    <FooterWrapper>
      <div>
        <span
          role="img"
          aria-label="Emoji - heart wrapped"
          className="heart-wrapped-emoji"
        >
          💝
        </span>
        <span>Love saves the day!</span>
        <br />
        <span>©️ 2020 Mel Jones</span>
        <br />
        <span>Gatsby Starter by Marguerite Roth </span>
      </div>
      <SocialIcons />
      <FooterAuthor href="https://github.com/margueriteroth/gatsby-prismic-starter-prist">
        <img className="footer-logo" src={Logo} />
      </FooterAuthor>
    </FooterWrapper>
  </FooterContainer>
)

export default Footer
