import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const ButtonContainer = styled("button")`
  padding: 1em 2em;
  background: ${colors.blue200};
  font-family: "IBM Plex Mono", monospace;
  font-weight: 800;
  color: ${colors.blue600};
  outline: none;
  border: 1px;
  font-size: 1rem;
  border-radius: 30px;
  position: relative;
  transition: background 100ms ease-in-out;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
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
    transition: background 100ms ease-in-out;
    color: ${colors.purple900};
  }

  &.Button--secondary {
    padding: 0.95em 1.8em;
    font-size: 0.95rem;
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
