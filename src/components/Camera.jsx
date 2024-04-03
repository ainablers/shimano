import React, { useRef, useState, useLayoutEffect } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, useScroll } from "@react-three/drei";
import { useShimanoStore } from "../store/store";
import { CurrentView } from "../types/camera";
import { Parts } from "../types/parts";

export default function Camera({}) {
  const cameraRef = useRef();
  const [initalCameraSet, setInitalCameraSet] = useState(false);
  const { currentView, setCurrentView, activePart } = useShimanoStore(
    (state) => state
  );

  const initalCameraPos = new THREE.Vector3(-3.4, 20.1, 1.9);
  const initalCameraLookAt = new THREE.Vector3(0.4, 21.4, 0);

  const bikeCameraPos = new THREE.Vector3(-3.4, 0.9, 1.9);
  const bikeCameraLookAt = new THREE.Vector3(0.4, 0.4, 0);

  let speed = 0.01;

  // Camera positions for each part
  const cameraPostions = [
    {
      name: "Chain",
      lookAtCamera: new THREE.Vector3(-0.33, 0, 0),
      cameraPosition: new THREE.Vector3(-0.9, 0.1, 0.6),
    },
    {
      name: "Handlebar",
      lookAtCamera: new THREE.Vector3(1, 0, 0),
      cameraPosition: new THREE.Vector3(-0.3, 1.4, 0.0),
    },
    {
      name: "tires",
      lookAtCamera: new THREE.Vector3(1, 0.3, 0.2),
      cameraPosition: new THREE.Vector3(1.3, 0.3, 0.3),
    },
  ];

  // Set inital camera position
  useLayoutEffect(() => {
    if (cameraRef.current && !initalCameraSet) {
      cameraRef.current.position.set(
        initalCameraPos.x,
        initalCameraPos.y,
        initalCameraPos.z
      );
      cameraRef.current.lookAt(
        initalCameraLookAt.x,
        initalCameraLookAt.y,
        initalCameraLookAt.z
      );
      setInitalCameraSet(true);
    }
  }, [activePart]);

  const { camera: test } = useThree();
  const cameraLookAt = useRef(new THREE.Vector3());

  useFrame(({ camera }) => {
    const currentPosition = camera.position;
    const currentCameraLookat = cameraLookAt.current
      .copy(camera.position)
      .add(camera.getWorldDirection(new THREE.Vector3()));

    switch (currentView) {
      case CurrentView.PANNING_TO_BIKE:
        camera.position.lerp(bikeCameraPos, speed);
        camera.lookAt(initalCameraLookAt.lerp(bikeCameraLookAt, speed));

        const distance = currentPosition.distanceTo(bikeCameraPos);

        if (distance < 0.1) {
          speed += 0.001;
          setCurrentView(CurrentView.BIKE);
        }
        break;
      case CurrentView.BIKE:
        camera.position.lerp(bikeCameraPos, speed);
        camera.lookAt(currentCameraLookat.lerp(bikeCameraLookAt, speed));
        break;
    }
  });

  useFrame((state) => {
    if (activePart === Parts.CHAIN) {
      const { lookAtCamera, cameraPosition } = cameraPostions[0];

      state.camera.position.lerp(cameraPosition, 0.01);
      state.camera.lookAt(bikeCameraLookAt.lerp(lookAtCamera, 0.01));
    } else if (activePart === Parts.HANDLEBAR) {
      const { lookAtCamera, cameraPosition } = cameraPostions[1];

      state.camera.position.lerp(cameraPosition, 0.01);
      state.camera.lookAt(bikeCameraLookAt.lerp(lookAtCamera, 0.01));
    } else if (activePart === Parts.TIRE) {
      const { lookAtCamera, cameraPosition } = cameraPostions[2];

      state.camera.position.lerp(cameraPosition, 0.01);
      state.camera.lookAt(bikeCameraLookAt.lerp(lookAtCamera, 0.01));
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault />;
}
