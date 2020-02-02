import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const ButtonContainer = styled("button")`
  margin-top: 3em;
  padding: 1em 2em;
  background: ${colors.blue600};
  font-family: inherit;
  font-weight: 900;
  color: ${colors.grey100};
  outline: none;
  border: 1px;
  font-size: 1rem;
  border-radius: 7.5px;
  position: relative;
  transition: background 150ms ease-in-out;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-top: 2em;
    padding: 0.8em 1.8em;
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    border-radius: inherit;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${colors.pink300} 0%,
      ${colors.purple300} 100%
    );
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    transition: background 150ms ease-in-out;
    color: ${colors.purple900};
  }

  &.Button--secondary {
    padding: 0.95em 1.8em;
    font-size: 0.95rem;
    margin: 0;
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
