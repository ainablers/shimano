import styled from "styled-components";

export const LineWrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  box-sizing: content-box;
`;

export const DialogueText = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 98px;
  font-weight: bold;
  position: relative;
  align-items: center;
  user-select: none;

  span {
    color: #019fe3;
    opacity: 0;
    transition: 0.2s;
    width: 100%;
  }
`;

export const DialogueBoxWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  user-select: none;
  width: 98px;
  height: 98px;
  flex-shrink: 0;
  border: 3px solid white;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    background: white;
    top: 50%;
    width: 42px;
    height: 3px;
    z-index: 20;
  }
`;

export const DialogueWrapper = styled.div`
  position: absolute;
  cursor: none;
  display: none;
  color: black;
  pointer-events: all;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.show {
    opacity: 1;
    display: flex;
  }

  line {
    stroke: white;
  }

  :hover {
    line {
      stroke: #019fe3;
    }

    ${DialogueBoxWrapper} {
      border-color: #019fe3;

      &::before {
        background: #019fe3;
      }
    }

    ${DialogueText} {
      span {
        opacity: 1;
      }
    }

    &:before {
      background: #019fe3;
    }
  }

  &::before {
    content: "";
    position: absolute;
    background: white;
    width: 10px;
    height: 10px;
    z-index: 20;
  }

  &.top-left {
    flex-direction: row-reverse;
    transform: translateX(-100%);

    ${LineWrapper} {
      height: calc(100% - 50px);
      padding-top: 47px;
    }

    ${DialogueBoxWrapper} {
      margin-right: 40px;

      &:before {
        left: calc(100% + 3px);
        top: calc(50% - 2px);
      }
    }

    ${DialogueText} {
      padding: 1px 10px 0 0;
      text-align: right;
    }

    &:before {
      right: -5px;
      bottom: -5px;
    }
  }

  &.bottom-left {
    flex-direction: row-reverse;
    transform: translateX(-100%);
    align-items: flex-end;

    ${LineWrapper} {
      height: calc(100% - 50px);
      padding-bottom: 47px;
    }

    ${DialogueBoxWrapper} {
      margin-right: 40px;

      &:before {
        left: calc(100% + 3px);
      }
    }

    ${DialogueText} {
      padding: 1px 10px 0 0;
      text-align: right;
    }

    &:before {
      right: -5px;
      top: -5px;
    }
  }

  &.bottom-right {
    flex-direction: row;
    transform: translateX(-100%);
    align-items: flex-end;

    ${LineWrapper} {
      height: calc(100% - 50px);
      padding-bottom: 47px;
    }

    ${DialogueBoxWrapper} {
      margin-left: 40px;

      &:before {
        right: calc(100% + 3px);
      }
    }

    ${DialogueText} {
      padding: 1px 0 0 10px;
      text-align: left;
    }

    &:before {
      left: -5px;
      top: -5px;
    }
  }

  &.top-right {
    flex-direction: row;

    ${LineWrapper} {
      height: calc(100% - 50px);
      padding-top: 47px;
    }

    ${DialogueBoxWrapper} {
      margin-left: 40px;

      &:before {
        right: calc(100% + 3px);
        top: calc(50% - 2px);
      }
    }

    ${DialogueText} {
      padding: 1px 0 0 10px;
    }

    &:before {
      left: -5px;
      bottom: -5px;
    }
  }
`;
