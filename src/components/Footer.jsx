import React from "react"
import styled from "@emotion/styled"
import colors from "../styles/colors"
import dimensions from "../styles/dimensions"
import Link from "./API/Link"
import SocialIcons from "./UI/SocialIcons"
import Logo from "../images/logo-mel-jones.svg"

const FooterContainer = styled("footer")`
  padding: 5em 0;
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
  grid-column: 2 / -2;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${colors.grey800};

  div {
    font-size: 0.95em;
    line-height: 2.5;
    letter-spacing: 0.5px;
  }

  .heart-wrapped-emoji {
    margin-right: 0.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;

    nav {
      order: -1;
    }

    div {
      order: 99;
      text-align: center;
    }
  }
`

const FooterAuthor = styled(Link)`
  text-decoration: none;
  padding: 3.5em 0;

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
        <span>
          Thanks to{" "}
          <Link to="https://github.com/margueriteroth/gatsby-prismic-starter-prist">
            Marguerite Roth
          </Link>
        </span>
      </div>
      <SocialIcons />
      <FooterAuthor to="/">
        <img className="footer-logo" src={Logo} />
      </FooterAuthor>
    </FooterWrapper>
  </FooterContainer>
)

export default Footer
