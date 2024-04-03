import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const StyledLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: #0000ff;
  color: #ffc0cb;
  height: 100vh;
  width: 100vw;
  font-weight: bold;
`;

export const BikeWheel = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #ffc0cb;
  animation: ${spin} 2s linear infinite;
  position: relative;
`;

export const BikeWheelinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ffc0cb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WheelSpoke = styled.div`
  width: 100px;
  height: 2px;
  background: #ffc0cb;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left;
`;
