import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import colors from "../../styles/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"

const Container = styled("div")`
  padding: 3em 0 1.5em;
  position: relative;
  display: grid;
  color: ${colors.grey800};

  h4 {
    justify-self: end;
    text-align: right;
    letter-spacing: -2px;
    color: ${colors.purple500};
    margin-bottom: 0.5em;
    border-radius: 3px;
    width: min-content;
  }

  label {
    margin-bottom: 1em;
    font-size: 1em;
    font-weight: 600;
    letter-spacing: 1px;
  }

  input,
  textarea {
    margin-top: 0.5em;
    margin-bottom: 1.5em;
    padding: 0.75em;
    width: 100%;
    color: ${colors.purple500};
    font-family: inherit;
    font-size: 1.4em;
    font-weight: 600;
    background: inherit;
    background: ${colors.grey300};
    border: none;
    border-radius: 3px;
    border-radius: 10px;

    &:hover,
    :focus {
      background: ${colors.purple200};
    }
  }

  textarea {
    resize: none;
  }

  .ButtonFormContainer {
    display: grid;
  }

  button {
    justify-self: end;
  }
  span {
    // margin: 0.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    svg {
      width: 80%;
    }
  }

  svg {
    padding-bottom: 0.2em;
  }
`

const Form = () => (
  <Container>
    <h4>Get in touch!</h4>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />

      <label id="name">
        Name
        <input id="name" type="text" name="name" />
      </label>

      <label id="email">
        Email
        <input id="email" type="email" name="email" />
      </label>

      <label id="message">
        Message
        <textarea id="message" name="message" rows="6" />
      </label>
      <div className="ButtonFormContainer">
        <Button
          className="Button--secondary"
          type="submit"
          name="Contact Mel"
          value="Contact Mel"
        >
          <span>
            <FontAwesomeIcon
              icon="paper-plane"
              css={css`
                font-size: 3em;
              `}
            />
            Email Mel
          </span>
        </Button>
      </div>
    </form>
  </Container>
)

export default Form
