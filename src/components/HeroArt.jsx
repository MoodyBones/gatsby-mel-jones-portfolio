import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"

const HeroArtWrapper = styled("div")`
  width: 600px;
  display: grid;
  background: #111010;
  padding: 2em;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: repeat(3, 150px);
  grid-auto-flow: column;
  font-weight: 600;
  text-transform: uppercase;

  .box {
    background-color: #4834d4;
    color: #fff;
    padding: 20px;
    font-size: 3.5em;
    display: grid;

    span {
      margin: auto;
    }
  }

  .box:nth-child(2n + 2) {
    background-color: #b57bff;
    color: #000;
  }

  .box:nth-child(4) {
    background-color: #f46b3f;
    color: #000;
  }

  .box:nth-child(3) {
    background-color: #f46b3f;
    color: #fff;
  }
`

const HeroArt = () => (
  <HeroArtWrapper>
    <div class="box">
      <span>w</span>
    </div>
    <div class="box">
      <span>e</span>
    </div>
    <div class="box">
      <span>b</span>
    </div>
    <div class="box">
      <span>d</span>
    </div>
    <div class="box">
      <span>e</span>
    </div>
    <div class="box">
      <span>v</span>
    </div>
  </HeroArtWrapper>
)

export default HeroArt