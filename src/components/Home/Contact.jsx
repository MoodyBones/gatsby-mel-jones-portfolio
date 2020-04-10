import React from "react"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"
import Form from "../UI/Form"

const ContactWrapper = styled("div")`
  grid-column: 2 / -2;

  padding: 6em 0;
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .image-wrapper {
    background: ${colors.orange200};
  }

  .Form {
    background: ${colors.grey900};
  }
`

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="image-wrapper"></div>
      <Form />
    </ContactWrapper>
  )
}

export default Contact
