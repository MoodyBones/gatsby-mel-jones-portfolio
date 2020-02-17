import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const ButtonContainer = styled("button")`
  padding: 0.8em 1.8em;
  position: relative;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.blue600};
  background: ${colors.grey200};
  border: 2px solid ${colors.blue600};
  border-radius: 3px;
  transition: background 150ms ease-in-out;
  // box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0.8em 1.8em;
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid ${colors.grey200};
    border-radius: 3px;
    background: linear-gradient(
      135deg,
      ${colors.purple500} 0%,
      ${colors.orange500} 100%
    );
    overflow: hidden;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    transition: background 150ms ease-in-out;
    color: ${colors.grey100};
    border: 2px solid ${colors.grey200};
    border-radius: 3px;

    &:before {
      width: 100%;
    }
  }

  &.Button--secondary {
    padding: 0.8em 1.8em;
    margin: 0;
    font-size: 1rem;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding: 0.8em 1.8em;
      font-size: 1em;
    }
  }

  &.Button--form {
    position: relative;
    background: ${colors.blue600};
    color: ${colors.grey200};

    padding: 0.8em 1.8em;
    font-size: 1rem;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding: 0.8em 1.8em;
      font-size: 1em;
    }
    &:before {
      content: "";
      position: absolute;
      left: -2px;
      top: -2px;
      width: 100%;
      height: 100%;
      border: 2px solid ${colors.grey200};
      border-radius: 3px;
      background: linear-gradient(
        135deg,
        ${colors.purple500} 0%,
        ${colors.orange500} 100%
      );
      overflow: hidden;
      z-index: -1;
    }

    &:hover {
      cursor: pointer;
      background: transparent;
      transition: background 150ms ease-in-out;
      color: ${colors.grey100};
      border: 2px solid ${colors.grey200};
      border-radius: 3px;

      &:before {
        width: 100%;
      }
    }
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
