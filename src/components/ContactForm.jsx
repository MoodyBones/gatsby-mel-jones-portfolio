import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"

const ContactFormContainer = styled("div")`
  border: 1px solid ${colors.grey500};

  form {
    display: flex;
    flex-direction: column;
  }
`

const FormElement = styled("div")`
  label {
    margin-bottom: 0.3em;
  }

  input {
    padding: ;
  }
`

const ContactForm = () => (
  <ContactFormContainer>
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <FormElement>
        <label id="name">
          Name
          <input id="name" type="text" name="name" />
        </label>
      </FormElement>
      <FormElement>
        <label id="email">
          Email
          <input id="email" type="email" name="email" />
        </label>
      </FormElement>
      <FormElement>
        <label id="message">
          Message
          <textarea id="message" name="message" rows="5" />
        </label>
      </FormElement>
      <FormElement>
        <Button
          className="Button--secondary"
          type="submit"
          name="Contact Mel"
          value="Contact Mel"
        >
          Contact Mel
        </Button>
      </FormElement>
    </form>
  </ContactFormContainer>
)

export default ContactForm
