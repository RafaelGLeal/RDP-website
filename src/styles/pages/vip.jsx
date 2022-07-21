import styled from "styled-components";
import redBG from "../../assets/vipRedBG.png";
import blueBG from "../../assets/vipBlueBG.png";

export const VipSection = styled.section`
  z-index: 20;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${redBG});
    background-repeat: no-repeat;
    left: 0;
    top: 10%;
    opacity: 0.5;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${blueBG});
    background-repeat: no-repeat;
    opacity: 0.5;
    background-position-y: bottom;
    background-position-x: right;
    z-index: -1;
  }
  .title-container {
    margin: 15em 0;
    display: grid;
    place-items: center;
    h2 {
      font-family: var(--font-heading);
      font-size: var(--f-size-lg);
      text-transform: uppercase;
      margin-bottom: 1em;
      span:nth-child(2) {
        color: var(--dark-red);
        margin-left: 0.4em;
      }
    }
    p {
      width: 50ch;
      text-align: center;
      line-height: 22px;
    }
  }
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 10em;
    position: relative;
    margin-bottom: 2em;
  }
`;