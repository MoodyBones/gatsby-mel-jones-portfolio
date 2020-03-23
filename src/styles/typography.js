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
    font-size: 4em;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -1px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.75em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.5em;
    }
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 5em;
    font-weight: 900;
    letter-spacing: 1px;
    line-height: 1.2;
  }

  h3 {
    font-family: "Montserrat", sans-serif;
    line-height: 1;
    font-size: 2.5em;
    font-weight: 900;
    letter-spacing: -1px;
  }

  h4 {
    letter-spacing: -2px;
    line-height: 1;
    text-transform: uppercase;
    font-size: 10em;
    font-weight: 900;
    color: rgba(244, 107, 63, 0.5); // oranges500
  }

  h5 {
    font-weight: 600;
    font-size: 0.95em;
    text-transform: uppercase;
    letter-spacing: 0.5px;
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
