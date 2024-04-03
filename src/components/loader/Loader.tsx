import { Html, useProgress } from "@react-three/drei";
import React from "react";
import {
  BikeWheel,
  BikeWheelinner,
  StyledLoader,
  WheelSpoke,
} from "./Loader.styled";

// create a bike wheel with just html and css and animate it
function HtmlBikeWheel() {
  return (
    <BikeWheel>
      <BikeWheelinner />
      <div>
        {[...Array(12)].map((_, i) => {
          return (
            <WheelSpoke
              className="line"
              key={i}
              style={{
                transform: `rotate(${i * 30}deg) translate(-50%, -50%)`,
              }}
            />
          );
        })}
      </div>
    </BikeWheel>
  );
}

export default function Loader() {
  const test = useProgress();
  const { progress } = useProgress();
  return (
    <Html center>
      <StyledLoader>
        <HtmlBikeWheel />
        <span>Loading...</span>
        <span>{Math.ceil(progress).toFixed(0)} %</span>
      </StyledLoader>
    </Html>
  );
}
