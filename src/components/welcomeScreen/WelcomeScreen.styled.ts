import styled, { keyframes } from "styled-components";

const fadeInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(calc(-50% - 100px));
  }
  to {
    opacity: 1;
    transform: translateY(-50%);
  }
`;

const fadeInFromTopD12 = keyframes`
  from {
    opacity: 0;
    transform: translateY(calc(-50% - 30px));
  }
  to {
    opacity: 1;
    transform: translateY(calc(-50% - 40px));
  }
`;

const fadeInFromBottom = keyframes`
  from {
    opacity: 1;
    transform: translateY(-50%);
  }
  to {
    opacity: 0;
    transform: translateY(calc(-50% - 300px));
  }
`;

export const D12 = styled.img`
  position: absolute;
  top: 50%;
  z-index: 10;
  opacity: 0;
  animation: ${fadeInFromTopD12} 3s forwards;
  animation-delay: 1.1s;
`;

export const ClickToDiscover = styled.h1`
  text-align: center;
  font-size: 12px;
  cursor: none;
  color: white;
  font-weight: 400;
  position: relative;
  z-index: 20;
  margin-top: 269px;
  font-family: "Ancho", sans-serif;
  opacity: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
  position: absolute;
  justify-content: center;
  left: 0;
  right: 0;
  top: 50%;
  bottom: 0;
  z-index: 200;
  opacity: 0;
  animation: ${fadeInFromTop} 2s forwards;
  animation-delay: 0.2s;

  &.loaded {
    ${ClickToDiscover} {
      animation: ${fadeInFromTop} 2s forwards;
      animation-delay: 3.1s;
    }
  }

  &.exploring {
    animation: ${fadeInFromBottom} 0.6s forwards;

    ${ClickToDiscover} {
      animation: ${fadeInFromBottom} 0.6s forwards;
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 88px;
  margin-bottom: 16px;
  color: white;
  font-weight: 400;
  font-family: "Ancho", sans-serif;
  position: relative;
  z-index: 20;
`;

export const SubTitle = styled.h2`
  color: #ff3e9e;
`;
