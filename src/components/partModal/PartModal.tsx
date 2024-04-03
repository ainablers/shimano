import React from "react";
import { CurrentView } from "../../types/camera";
import { useShimanoStore } from "../../store/store";
import {
  BlueArrow,
  CloseButton,
  Container,
  Content,
  Description,
  Title,
  TopBackground,
  WhiteLineBottom,
  WhiteLineBottomRight,
  WhiteLineTop,
  WhiteLineTopRight,
} from "./PartModal.styled";

type Props = {
  className?: string;
};

export default function PartModal({ className }: Props) {
  const { setCurrentView, activePart, setActivePart } = useShimanoStore(
    (state) => state
  );

  return (
    <Container className={`${className} ${activePart ? "active" : ""}`}>
      <WhiteLineTop />
      <WhiteLineBottom />
      <WhiteLineBottomRight />
      <WhiteLineTopRight />
      <BlueArrow />
      <TopBackground />
      <Content>
        <Title>OPTIMIZED 12-SPEED GEARING</Title>
        <Description>
          The refined 12-step gear combination ensures excellent efficiency so
          none of your effort is wasted. You’ll experience faster, smoother
          shifts under maximum torque (pedalling force) and shifts so smooth
          you’ll barely notice them – whether biking uphill, downhill or rolling
          on the flats.
        </Description>
      </Content>

      <CloseButton
        onClick={() => {
          setActivePart(null);
          setCurrentView(CurrentView.BIKE);
        }}
      >
        <img src={"images/svg/cross.svg"} alt="Close modal button" />
        <span>close</span>
      </CloseButton>
    </Container>
  );
}
