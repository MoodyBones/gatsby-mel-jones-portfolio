import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  p {
    margin: 0;
  }

  h1 {
    font-size: 3.75em;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -3px;

    @media (max-width: 1000px) {
      font-size: 3em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 2.8em;
    }
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.2;
    color: ${colors.grey800};

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 4em;
    }
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    line-height: 1;
    font-size: 2.5em;
    font-weight: 900;
    letter-spacing: -1px;
    color: ${colors.grey800};
  }

  h4 {
    letter-spacing: -2px;
    line-height: 0.9;
    font-size: 8em;
    font-weight: 900;

    @media (max-width: 1000px) {
      font-size: 7em;
    }

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 7em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 6em;
    }
  }

  h5 {
    font-weight: 600;
    font-size: 2em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    line-height: 1.9;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }

  a {
    text-decoration: none;
  }

  a:active,
  a:focus {
    outline: none;
  }

  p,
  span,
  ul {
    a {
      color: currentColor;
      text-decoration: none;
      border-bottom: 2px solid ${colors.purple500};
      padding-bottom: 1px;
    }

    a:hover,
    a:active {
      border-bottom: 2px solid ${colors.orange500};
    }
  }
`

export default typeStyles
