import { Suspense, useState } from 'react';

import Lights from './Lights';
import Floor from './Floor';

import React from 'react';
import BikeModel from './BikeModel';
import { Environment, Stats, useProgress } from '@react-three/drei';
import Camera from './Camera';
import WelcomeScreen from './welcomeScreen/WelcomeScreen';
import { Canvas } from '@react-three/fiber';
import Menu from './menu/Menu';
import { useShimanoStore } from '../store/store';
import { CurrentView } from '../types/camera';
import PartModal from './partModal/PartModal';

const HDRI_PATH = '/hdris/fouriesburg_mountain_midday_4k_cyberpunk.hdr';

function Scene({ setLoaded }) {
    const { progress } = useProgress();

    if (progress === 100) {
        setLoaded(true);
    }

    return (
        <Suspense fallback={null}>
            {/* <Menu /> */}

            {/* Camera */}
            {/* <OrbitControls maxPolarAngle={Math.PI / 2 + 0.01} /> */}

            <Camera />

            {/* <Clouds /> */}
            <Stats />

            {/* Environment */}
            <Lights />
            <Environment files={HDRI_PATH} background ground resolution={4000} />
            <Floor />

            {/* Bike Model */}
            <BikeModel />
        </Suspense>
    );
}

function Shimano() {
    const [loaded, setLoaded] = useState(false);
    const { currentView } = useShimanoStore((state) => state);
    const loadedClassName = loaded ? 'loaded' : '';
    const exploringClassName = currentView === 'welcome-screen' ? '' : 'exploring';

    return (
        <>
            <Menu />
            <WelcomeScreen className={`${loadedClassName} ${exploringClassName}`} />
            <PartModal />

            <Suspense fallback={null}>
                <Canvas
                    id="canvas-container"
                    className={loadedClassName}
                    shadows
                    dpr={[1, 2]}
                    camera={{
                        fov: 40,
                        near: 0.1,
                        far: 1100,
                    }}
                >
                    <Scene setLoaded={setLoaded} />
                </Canvas>
            </Suspense>
        </>
    );
}

export default Shimano;
