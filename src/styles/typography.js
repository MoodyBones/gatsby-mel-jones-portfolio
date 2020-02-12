import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    font-family: "IBM Plex Mono", monospace;
    font-size: 1.9em;
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
    font-size: 3em;
    font-weight: 600;
    letter-spacing: -2px;
    text-align: center;
  }

  h3 {
    line-height: 1.2;
    font-size: 2em;
    font-weight: 600;
  }

  h4 {
    font-family: "IBM Plex Mono", monospace;
    font-size: 2.2em;
    font-weight: 400;
    letter-spacing: -2px;
    background: ${colors.grey900};
    color: ${colors.blue300};
    padding-left: 1em;
    border-radius: 3px;
    border-bottom: .5em solid ${colors.orange500}; 
    // box-shadow: 6px 6px ${colors.orange500};

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
