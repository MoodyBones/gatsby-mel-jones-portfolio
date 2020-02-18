import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    // font-family: "IBM Plex Mono", monospace;
    font-family: Inconsolata, monospace;
    font-size: 1.7em;
    font-weight: 400;
    letter-spacing: -0.5px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.75em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.5em;
    }
  }

  h2 {
    font-size: 3.2em;
    font-weight: 600;
    letter-spacing: -3px;
    line-height: 1.2;
  }

  h3 {
    line-height: 1.2;
    font-size: 2em;
    font-weight: 600;
    letter-spacing: -1px;
  }

  h4 {
    font-size: 2.2em;
    font-weight: 600;
    letter-spacing: -2px;
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
