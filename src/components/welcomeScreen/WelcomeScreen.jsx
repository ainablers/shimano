import React from "react";
import { CurrentView } from "../../types/camera";
import { useShimanoStore } from "../../store/store";
import {
  ClickToDiscover,
  Container,
  D12,
  SubTitle,
  Title,
} from "./WelcomeScreen.styled";

export default function WelcomeScreen({ className }) {
  const { setCurrentView } = useShimanoStore((state) => state);

  return (
    <Container className={className}>
      <D12 src={"images/svg/d12.svg"} alt="Shomano campaign" />
      <Title>IT'S A NEW DAY</Title>
      <SubTitle>105 Di2 is here</SubTitle>
      <ClickToDiscover
        onClick={() => setCurrentView(CurrentView.PANNING_TO_BIKE)}
      >
        Click to discover
      </ClickToDiscover>
    </Container>
  );
}
