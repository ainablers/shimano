import React from "react";
import { Html } from "@react-three/drei";
import {
  DialogueBoxWrapper,
  DialogueText,
  DialogueWrapper,
  LineWrapper,
} from "./Lines.styled";

export default function MeshWithLabel({
  show,
  position = "top-left",
  onClick,
}) {
  const dialogueBoxHeight = 200;
  const dialogueBoxWidth = 400;
  const topOffset = ["top-left", "top-right"].includes(position)
    ? -dialogueBoxHeight
    : 0;
  const leftOffset = position === "bottom-right" ? dialogueBoxWidth : 0;

  function getStrokeDirection() {
    switch (position) {
      case "top-left":
        return { x1: "0", y1: "0", x2: "100%", y2: "100%" };
      case "bottom-left":
        return { x1: "0", y1: "100%", x2: "100%", y2: "0" };
      case "bottom-right":
        return { x1: "100%", y1: "100%", x2: "0", y2: "0" };
      case "top-right":
        return { x1: "0", y1: "100%", x2: "100%", y2: "0" };
    }
  }

  const HtmlContent = () => {
    return (
      <DialogueWrapper
        className={`${position} ${show ? "show" : ""}`}
        onClick={onClick}
        style={{
          height: dialogueBoxHeight,
          width: dialogueBoxWidth,
          left: leftOffset,
          top: topOffset,
        }}
      >
        <LineWrapper>
          <svg style={{ width: "100%", height: "100%" }}>
            <line {...getStrokeDirection()} style={{ strokeWidth: "3" }} />
          </svg>
        </LineWrapper>
        <DialogueBoxWrapper>
          <span>Model img</span>
        </DialogueBoxWrapper>

        <DialogueText>
          <div>BEAUTIFULL CLEAN COCKPIT</div>
          <span>DISCOVER</span>
        </DialogueText>
      </DialogueWrapper>
    );
  };

  return (
    <Html>
      <HtmlContent />
    </Html>
  );
}
