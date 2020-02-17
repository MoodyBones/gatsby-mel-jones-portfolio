import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"

const ContactFormContainer = styled("div")`
  padding: 3em;
  position: relative;
  display: grid;
  max-width: 400px;
  color: ${colors.blue600};
  border: 2px solid ${colors.blue600};
  border-radius: 3px;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.06);

  h3 {
    position: absolute;
    justify-self: center;
    background: ${colors.grey200};
    top: -55px;
  }

  label {
    margin-bottom: 1em;
    font-size: 0.8em;
  }

  input,
  textarea {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
    padding: 0.75em;
    color: ${colors.blue600};
    font-family: inherit;
    font-size: 1.4em;
    font-weight: 600;
    background: inherit;
    // border: 1px solid ${colors.grey500};
      border: 2px solid ${colors.blue600};

    border-radius: 3px;
  }

  textarea {
    resize: none;
  }

  form {
    display: grid;

    button {
     justify-self: end;
    }
  }
`

const ContactForm = () => (
  <ContactFormContainer>
    <h3>Get in touch</h3>
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
        <textarea id="message" name="message" rows="4" />
      </label>
      <Button
        className="Button--form"
        type="submit"
        name="Contact Mel"
        value="Contact Mel"
      >
        Contact Mel
      </Button>
    </form>
  </ContactFormContainer>
)

export default ContactForm
