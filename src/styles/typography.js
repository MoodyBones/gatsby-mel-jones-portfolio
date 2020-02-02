import css from "@emotion/css"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    font-family: "IBM Plex Mono", monospace;
    font-size: 2em;
    font-weight: 400;
    letter-spacing: -2px;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 1.75em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 1.5em;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.9em;
  }

  h3 {
    line-height: 1;
    font-size: 1.5em;
    font-weight: 900;
  }

  h5 {
    margin-bottom: 1.45rem;
    font-weight: 600;
    font-size: 0.95em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 600;
    margin: 0;
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
