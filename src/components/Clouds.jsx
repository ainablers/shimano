import { Cloud } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";

export default function Floor() {
  const cloudRef = useRef();

  useFrame(({ camera }) => {
    console.log(camera);
    console.log({ cloudRef });

    const frustumHeight =
      2 * Math.tan((camera.fov * Math.PI) / 180 / 2) * camera.position.z;
    cloudRef.current.position.y = -frustumHeight / 2;
  });

  return (
    <mesh ref={cloudRef}>
      <Cloud
        position={[0, 0, 0]}
        opacity={0.5}
        speed={0.4} // Rotation speed
        width={10} // Width of the full cloud
        depth={1.5} // Z-dir depth
        segments={20} // Number of particles
      />
    </mesh>
  );
}
