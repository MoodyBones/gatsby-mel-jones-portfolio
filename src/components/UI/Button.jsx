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
  color: ${colors.grey800};
  background: inherit;
  border: 1.5px solid ${colors.grey800};
  border-radius: 3px;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
  transition: all 0.5s ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  p {
    margin: 0;
  }


  &:hover,
  :focus {
    cursor: pointer;
    color: black;
    background: ${colors.purple100};
    background: white;
    border: 1.5px solid black;
    border-radius: 3px;
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
    background: ${colors.purple100};
    color: ${colors.purple300};
    // opacity: 75%;
    transition: background 0.5s ease;

    &:hover,
    :focus {
    cursor: pointer;
    background: ${colors.purple200};
    color: ${colors.purple600};
    opacity: 100%;

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
