import React from "react";
import {
  BoxesWithDotsAndAnimation,
  BoxWithDotsAndAnimation,
  CampaignImage,
  Container,
  Dot,
  Dots,
  Hamburger,
  MenuLines,
  Logo,
  MenuItems,
  Navigation,
} from "./Menu.styled";

type Props = {
  className?: string;
};

export default function Menu({ className }: Props) {
  return (
    <Container className={className}>
      <MenuLines>
        <span />
        <span />
      </MenuLines>
      <BoxesWithDotsAndAnimation>
        {Array.from({ length: 3 }).map((_, index) => (
          <BoxWithDotsAndAnimation
            key={index}
            delay={Math.floor(index / 3) * 2.1}
          >
            <Dots>
              {Array.from({ length: 29 }).map((_, index) => (
                <Dot key={index} />
              ))}
            </Dots>
          </BoxWithDotsAndAnimation>
        ))}
      </BoxesWithDotsAndAnimation>
      <MenuItems>
        <div>
          <CampaignImage
            src={"images/svg/shimano-campaign.svg"}
            alt="Shomano campaign"
          />
        </div>
        <div>
          <Logo src={"images/svg/logo.svg"} alt="Shimano logo" />
        </div>
        <Navigation>
          <Hamburger>
            <span />
            <span />
            <span />
          </Hamburger>
        </Navigation>
      </MenuItems>
    </Container>
  );
}
