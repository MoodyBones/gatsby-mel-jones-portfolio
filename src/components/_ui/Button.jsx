import React, { Component } from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const ButtonContainer = styled("button")`
  padding: 0.8em 1.8em;
  position: relative;
  display: inline-block;
  font-family: inherit;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${colors.blue600};
  background: ${colors.grey200};
  border: 2px solid ${colors.blue600};
  border-radius: 3px;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

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

  &:hover,
  :focus {
    cursor: pointer;
    color: white;
    background: transparent;
    // transition: background 150ms ease-in-out;
    border: 2px solid ${colors.grey200};
    border-radius: 3px;

    &:before {
      width: 100%;
    }
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }

  &.Button--secondary {
    padding: 0.8em 1.8em;
    display: inline-block;
    width: 100%;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    color: ${colors.grey200};
    background: ${colors.blue600};
    border: none;
    border-radius: 3px;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      padding: 0.8em 1.8em;
      font-size: 1em;
    }
    &:hover,
    :focus {
      color: white;
      background: linear-gradient(
        135deg,
        ${colors.purple500} 0%,
        ${colors.orange500} 100%
      );
    }

    &:focus {
      outline: 1px solid #fff;
      outline-offset: -4px;
    }

    &:active {
      transform: scale(0.99);
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
