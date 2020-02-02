import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  border-bottom: 1px solid ${colors.grey200};

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 2em 0 1em 0;
  }
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-gap: 7em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 1em;
  }

  a {
    color: currentColor;
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 900;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 0.95em;
    height: 100%;
    padding-bottom: 1.25em;
    padding-top: 0.25em;
    display: block;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 97%;
      height: 2px;
      bottom: 80px;
      // margin-right: -9px;
      background: ${colors.grey900};
      visibility: hidden;
      transform-origin: left;
      transform: scale(0);
      transition: 0.25s ease-out;
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

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderLinks>
        <Link activeClassName="Link--is-active" to="/work">
          Work
        </Link>
        <Link activeClassName="Link--is-active" to="/blog">
          Blog
        </Link>
      </HeaderLinks>
    </HeaderContent>
  </HeaderContainer>
)

export default Header
