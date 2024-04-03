import styled, { keyframes } from "styled-components";

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 30px 46px 0;
  position: fixed;
  justify-content: space-between;
  left: 0;
  right: 0;
  top: 0;
  z-index: 200;
  opacity: 0;
  animation: ${fadeInFromTop} 1s forwards;
`;

export const MenuItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  > div {
    flex: 1;
    display: flex;
    align-items: center;

    &:first-child {
      justfy-content: flex-start;
    }

    &:nth-child(2) {
      justify-content: center;
    }

    &:last-child {
      justify-content: flex-end;
    }
  }
`;

export const MenuLines = styled.div`
  position: absolute;
  top: 20px;
  left: 23%;
  opacity: 0;
  animation: ${fadeInFromLeft} 1s forwards;
  animation-delay: 1.1s;

  span {
    display: block;
    width: 251px;
    opacity: 0.2;
    height: 1px;
    background-color: #fff;

    &:first-child {
      margin-bottom: 5px;
      margin-left: -10px;
    }
  }
`;

export const CampaignImage = styled.img`
  width: 297px;
`;

export const Logo = styled.img`
  width: 118px;
`;

export const Navigation = styled.div`
  width: 118px;
`;
export const Hamburger = styled.div`
  span {
    display: block;
    width: 65px;
    height: 3px;
    background-color: #fff;
    margin-bottom: 13px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Box = styled.div`
  height: 2px;
  opacity: 0;
  animation: ${fadeInFromLeft} 1s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 13px;
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #fff;
  margin: 4px;
`;

export const BoxWithDots = styled(Box)`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Dots = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

export const BoxWithDotsAndAnimation = styled(BoxWithDots)<{ delay: number }>`
  animation-delay: ${(props) => `${props.delay}s`};
`;

export const BoxesWithDotsAndAnimation = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  position: absolute;
  right: -27px;
  top: 122px;

  ${BoxWithDotsAndAnimation}:nth-child(3n + 1) {
    animation-delay: 1.1s;
  }
  ${BoxWithDotsAndAnimation}:nth-child(3n + 2) {
    animation-delay: 1.2s;
  }
  ${BoxWithDotsAndAnimation}:nth-child(3n + 3) {
    animation-delay: 1.3s;
  }
`;
