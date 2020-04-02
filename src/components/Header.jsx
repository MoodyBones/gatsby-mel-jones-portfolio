import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "components/Link"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

const HeaderContainer = styled("header")`
  padding: 1em 4em 0.5em;
  position: sticky;
  top: 0;
  background: ${colors.grey100};
  width: 100%;
  z-index: 9999;
  border-bottom: 1px solid ${colors.grey300};

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 1em 1em 0.5em;
  }
`

const HeaderContent = styled("div")`
  grid-column: 2 / -2;

  display: flex;
  justify-content: space-between;

  svg {
    height: 60px;
    width: auto;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    svg {
      height: 30px;
      width: auto;
    }
  }

  a {
    color: ${colors.grey800};
    text-decoration: none;
    margin-left: 2.5em;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      margin-left: 2em;
    }
  }

  .logo-link {
    flex-grow: 2;
    margin: 0;
  }
`

const HeaderNav = styled("nav")`
  display: flex;
  align-items: center;

  // a:not(:last-child) {
  //   margin-right: 2em;
  // }
`

const NavLinks = styled("div")`
  display: flex;

  a {
    font-family: "Montserrat", sans-serif;
    font-size: 0.95em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    height: 100%;
    display: block;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 96%;
      height: 2px;
      top: 2em;
      background: ${colors.purple500};
      visibility: hidden;
      transform-origin: left;
      transform: scale(0);
      transition: 0.5s ease;
    }

    &:hover {
      &:after {
        visibility: visible;
        transform: scale(1);
      }
    }

    &.Link--is-active {
      &:after {
        visibility: visible;
        transform: scale(1);
      }
    }
  }
`

const IconLinks = styled("div")`
  display: flex;
  flex-direction: row;

  .icon-social {
    font-size: 1.3em;
    transition: 0.5s ease;

    &:hover {
      transform: scale(1.5);
    }
  }

  // a:not(:last-child) {
  //   margin-right: 2em;
  // }
`

const Header = () => (
  <HeaderContainer className="main-grid">
    <HeaderContent>
      <Link to="/" className="logo-link">
        <Logo />
      </Link>
      <HeaderNav>
        <NavLinks>
          <AnchorLink to="/#anchor-about-section" title="About Mel">
            <span>About</span>
          </AnchorLink>
          <Link activeClassName="Link--is-active" to="/work">
            <span>Work</span>
          </Link>
          <Link activeClassName="Link--is-active" to="/blog">
            <span>Blog</span>
          </Link>
        </NavLinks>
        <IconLinks>
          {/* <Link href="https://github.com/MoodyBones">
            <span>
              <FontAwesomeIcon
                className="icon-social"
                icon={["fab", "github"]}
              />
            </span>
          </Link>
          <Link href="https://twitter.com/_moodybones">
            <span>
              <FontAwesomeIcon
                className="icon-social"
                icon={["fab", "twitter"]}
              />
            </span>
          </Link> */}
          <AnchorLink to="/#anchor-contact-form" title="Email">
            <span>
              <FontAwesomeIcon className="icon-social" icon="paper-plane" />
            </span>
          </AnchorLink>
        </IconLinks>
      </HeaderNav>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
