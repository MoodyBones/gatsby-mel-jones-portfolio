import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    font-size: 3em;
    font-weight: 600;
    letter-spacing: -0.5px;
    line-height: 1.5;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.75em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.5em;
    }
  }

  h2 {
    // font-family: "Merriweather", serif;
    font-size: 3.5em;
    font-weight: 900;
    letter-spacing: -3px;
    line-height: 1.2;
  }

  h3 {
    line-height: 1;
    font-size: 3em;
    font-weight: 600;
    letter-spacing: -1px;
  }

  h4 {
    margin: 0;
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
    margin: 0;
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
`

export default typeStyles
