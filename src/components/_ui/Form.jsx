import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import colors from "styles/colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "components/_ui/Button"

const ContactFormContainer = styled("div")`
  padding: 4em 2.5em 1.5em;
  position: relative;
  display: grid;
  color: ${colors.blue600};
  border: 2px solid ${colors.blue600};
  border-radius: 3px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

  h3 {
    padding-right: 0.5em;
    padding-left: 0.5em;
    position: absolute;
    justify-self: center;
    background: ${colors.grey100};
    top: -20px;
    font-weight: 600;
  }

  label {
    margin-bottom: 1em;
    font-size: 1em;
    font-weight: 600;
  }

  input,
  textarea {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
    padding: 0.75em;
    width: 100%;
    color: ${colors.blue600};
    font-family: inherit;
    font-size: 1.4em;
    font-weight: 600;
    background: inherit;
    border: 2px solid ${colors.blue600};
    border-radius: 3px;

    &:focus {
      outline: 4px dotted ${colors.grey500};
      outline-offset: 6px;
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
    margin: 0.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  svg {
    padding-bottom: 0.4em;
  }
`

const ContactForm = () => (
  <ContactFormContainer>
    <h3>Get in touch!</h3>
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
  </ContactFormContainer>
)

export default ContactForm
