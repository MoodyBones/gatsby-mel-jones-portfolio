import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "../../styles/colors"
import dimensions from "../../styles/dimensions"

const ButtonContainer = styled("button")`
  padding: 0.8em 1.8em;
  position: relative;
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  border: none;
  border-radius: 3px;
  background: ${colors.purple200};
  background: ${colors.grey900};
  color: ${colors.grey200};
  transition: background 0.5s ease;


  p {
    margin: 0;
  }


  &:hover,
  :focus {
    cursor: pointer;
    background: ${colors.orange500};
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus {
    outline: 4px dotted ${colors.grey400};
    outline-offset: 6px;
  }

  &.Button--secondary {
    font-size: .8rem;
    border: none;
    background: ${colors.grey300};
    color: ${colors.purple500};
    transition: background 0.5s ease, color 0.2s ease;

    &:hover,
    :focus {
    cursor: pointer;
    background: ${colors.purple200};
    color: ${colors.purple600};
  }
`

class Button extends Component {
  render() {
    const { children, ...props } = this.props
    return (
      <ButtonContainer onClick={this.props.onClick} {...props}>
        {this.props.children}
      </ButtonContainer>
    )
  }
}

export default Button
