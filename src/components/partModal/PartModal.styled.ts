import styled, { keyframes } from "styled-components";

export const Description = styled.div`
  color: #003e42;
  font-size: 20px;
  line-height: 32px;
`;

export const Content = styled.div`
  padding: 50px 71px;
  max-height: 235px;
  position: relative;
  z-index: 200;
  transition: max-height 3.8s ease-in-out;
  transition-delay: 2.4s;
  overflow: hidden;
`;

export const TopBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 190;
  background-image: url("images/svg/dialogue-bg.svg");
  background-size: 750px;
  background-position: top;
  width: 100%;
  height: calc(100% - 104px);
`;

export const WhiteLineTop = styled.div`
  position: absolute;
  top: 0;
  left: 180px;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.6s ease-in-out;
  transition-delay: 0.4s;
`;

export const WhiteLineBottom = styled.div`
  position: absolute;
  bottom: -96px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: width 0.6s ease-in-out;
  z-index: 200;
  transition-delay: 0.4s;
`;

export const WhiteLineBottomRight = styled.div`
  position: absolute;
  bottom: -46px;
  right: 19px;
  height: 0;
  width: 2px;
  background-color: #fff;
  transition: height 0.6s ease-in-out;
  z-index: 200;
  transition-delay: 0.4s;
`;

export const WhiteLineTopRight = styled.div`
  position: absolute;
  top: 91px;
  right: 38px;
  height: 0;
  width: 2px;
  background-color: #fff;
  transform: rotate(-50deg);
  transition: height 0.6s ease-in-out;
  z-index: 200;
  transition-delay: 0.4s;
`;

export const BlueArrow = styled.div`
  position: absolute;
  top: -11px;
  left: 34px;
  width: 0;
  height: 0;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 25px solid #46f4ff;
  transform: rotate(45deg);
  transition: all 0.6s ease-in-out;
  transition-delay: 0.4s;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    top: -11px;
    transform: rotate(-45deg);
    left: 2px;
    border-top: 2px solid #fff;
    border-left: 2px solid #fff;
    transition: all 0.6s ease-in-out;
    transition-delay: 0.6s;
`;

export const Container = styled.div`
  width: 750px;
  opacity: 0;
  position: fixed;
  justify-content: space-between;
  right: 80px;
  top: 171px;
  z-index: 200;

  &.active {
    opacity: 1;

    ${Content} {
      max-height: 3000px;
    }

    ${WhiteLineTop} {
      width: 150px;
    }

    ${WhiteLineBottom} {
      width: 300px;
    }

    ${WhiteLineBottomRight} {
      height: 100px;
    }

    ${WhiteLineTopRight} {
      height: 20px;
    }

    ${BlueArrow} {
      left: 27px;
      top: -16px;

      &:before {
        left: -12px;
        top: -11px;
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    z-index: 199;
    bottom: -96px;
    width: 750px;
    height: 200px;
    background-image: url("images/svg/dialogue-bg.svg");
    background-size: 750px;
    background-position: bottom;
  }
`;

export const Title = styled.div`
  color: #003e42;
  font-family: "Ancho", sans-serif;
  font-size: 52px;
  line-height: 64px;
  letter-spacing: 9px;
  padding-right: 45px;
  margin-bottom: 8px;
  position: relative;
  z-ind§ex: 200;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 0;
  top: 9px;
  font-size: 13px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 300;
  color: #fff;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;

  img {
    width: 16px;
    height: 16px;
  }
`;
