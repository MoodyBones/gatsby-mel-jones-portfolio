import css from "@emotion/css"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const globalStyles = css`
  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    width: 100%;
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
    color: ${colors.grey900};
    background: ${colors.grey200};
    -webkit-font-smoothing: antialiased;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.purple400};
        color: black;
      }
    }
  }

  .main-grid {
    display: grid;
    grid-template-columns: minmax(1em, 1fr) repeat(3, minmax(150px, 320px)) minmax(
        1em,
        1fr
      );
    grid-column-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    .main-grid {
      grid-template-columns: minmax(1em, 1fr) minmax(0px, 500px) minmax(
          1em,
          1fr
        );
      grid-column-gap: 0;
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }
`

export default globalStyles
