import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import Lines from './lines/Lines';
import { CurrentView } from '../types/camera';
import { useShimanoStore } from '../store/store';
import { Parts } from '../types/parts';

export default function Model({ ...props }) {
    const { currentView, setCurrentView, activePart, setActivePart } = useShimanoStore((state) => state);
    const showLines = currentView === CurrentView.BIKE;
    const { nodes, materials } = useGLTF('./models/bike.glb');
    const chainRef = useRef();
    const handleBarRef = useRef();
    const tiresRef = useRef();
    const saddleRef = useRef();

    function handleOnLineClick(part: Parts) {
        setActivePart(part);
        setCurrentView(CurrentView.BIKE_PART);
    }

    return (
        <>
            <group {...props} dispose={null}>
                <group position={[0, 0, 0]} rotation={[Math.PI, 0, 0]}>
                    <mesh
                        visible={activePart !== Parts.SADDLE}
                        scale={0.06}
                        position={[-0.1, -0.5, -0]}
                        ref={saddleRef}
                    >
                        <Lines show={showLines} position="top-left" onClick={() => handleOnLineClick(Parts.SADDLE)} />
                    </mesh>
                    <mesh visible={!activePart} scale={0.06} position={[0, -0.01, -0.1]} ref={chainRef}>
                        <Lines show={showLines} position="bottom-left" onClick={() => handleOnLineClick(Parts.CHAIN)} />
                    </mesh>
                    <mesh visible={!activePart} scale={0.06} position={[0.6, -0.6, 0]} ref={handleBarRef}>
                        <Lines
                            show={showLines}
                            position="top-right"
                            onClick={() => handleOnLineClick(Parts.HANDLEBAR)}
                        />
                    </mesh>
                    <mesh visible={!activePart} scale={0.06} position={[1.0, -0.2, 0]} ref={tiresRef}>
                        <Lines show={showLines} position="bottom-right" onClick={() => handleOnLineClick(Parts.TIRE)} />
                    </mesh>
                    <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.App8B2} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.AppBD3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.AppFD} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_20.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_21.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_22.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry} material={materials.App7C3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_75.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_76.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_77.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_78.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_79.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_80.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_81.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_82.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_83.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_84.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_85.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_86.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_87.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_88.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_89.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_90.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_91.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_92.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_93.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_94.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_95.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_96.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_97.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_98.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_99.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_100.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_101.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_102.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_103.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_104.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_105.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_106.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_107.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_108.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_109.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_110.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_111.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_112.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_113.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_114.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_115.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_116.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_117.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_118.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_119.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_120.geometry} material={materials.App93} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_121.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_122.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_123.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_124.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_125.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_126.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_127.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_128.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_129.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_130.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_131.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_132.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_133.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_134.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_135.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_136.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_137.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_138.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_139.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_140.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_141.geometry} material={materials.AppDF4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_142.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_143.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_144.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_145.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_146.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_147.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_148.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_149.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_150.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_151.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_152.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_153.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_154.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_155.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_156.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_157.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_158.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_159.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_160.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_161.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_162.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_163.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_164.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_165.geometry} material={materials.AppB8} />

                    <mesh castShadow receiveShadow geometry={nodes.Object_200.geometry} material={materials.App5D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_201.geometry} material={materials.App5D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_202.geometry} material={materials.App5D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_203.geometry} material={materials.App5D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_204.geometry} material={materials.App5D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_205.geometry} material={materials.App5D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_206.geometry} material={materials.AppC74} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_207.geometry} material={materials.AppC74} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_208.geometry} material={materials.AppC74} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_209.geometry} material={materials.AppC74} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_210.geometry} material={materials.AppC74} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_211.geometry} material={materials.AppC74} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_212.geometry} material={materials.AppC74} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_213.geometry} material={materials.App3B2} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_214.geometry} material={materials.App3B2} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_215.geometry} material={materials.App3B2} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_216.geometry} material={materials.App923} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_228.geometry} material={materials.AppAD2} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_229.geometry} material={materials.AppAD2} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_230.geometry} material={materials.App2E3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_231.geometry} material={materials.App2E3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_232.geometry} material={materials.App2E3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_233.geometry} material={materials.App2E3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_234.geometry} material={materials.App2E3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_235.geometry} material={materials.App2E3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_236.geometry} material={materials.App2E3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_237.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_238.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_239.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_240.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_241.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_242.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_243.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_244.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_245.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_246.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_247.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_248.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_249.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_250.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_251.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_252.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_253.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_254.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_255.geometry} material={materials.App8F3} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_256.geometry} material={materials.AppF44} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_257.geometry} material={materials.AppF44} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_258.geometry} material={materials.AppF44} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_259.geometry} material={materials.AppF44} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_260.geometry} material={materials.AppF44} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_261.geometry} material={materials.AppF44} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_262.geometry} material={materials.AppF44} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_263.geometry} material={materials.App234} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_264.geometry} material={materials.App234} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_178.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_179.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_180.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_181.geometry} material={materials.App34} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_182.geometry} material={materials.App34} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_171.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_172.geometry} material={materials.AppB8} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_173.geometry} material={materials.AppB8} />
                    {/* banden */}
                    <group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_267.geometry}
                            material={materials.App234}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_268.geometry}
                            material={materials.App234}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_283.geometry}
                            material={materials.AppB7}
                        />

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_274.geometry}
                            material={materials.AppC8}
                        />
                    </group>
                    <group>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_273.geometry}
                            material={materials.AppC8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_275.geometry}
                            material={materials.App34_0}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_265.geometry}
                            material={materials.App234}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_266.geometry}
                            material={materials.App234}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_282.geometry}
                            material={materials.AppB7}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_166.geometry}
                            material={materials.AppB8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_167.geometry}
                            material={materials.AppB8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_168.geometry}
                            material={materials.AppB8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_169.geometry}
                            material={materials.AppB8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_170.geometry}
                            material={materials.AppB8}
                        />

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_174.geometry}
                            material={materials.AppB8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_175.geometry}
                            material={materials.AppB8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_176.geometry}
                            material={materials.AppB8}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_177.geometry}
                            material={materials.AppB8}
                        />

                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_284.geometry}
                            material={materials.AppF25}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_269.geometry}
                            material={materials.App5D3}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_270.geometry}
                            material={materials.App5D3}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_271.geometry}
                            material={materials.App5D3}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_272.geometry}
                            material={materials.App5D3}
                        />
                    </group>

                    <mesh castShadow receiveShadow geometry={nodes.Object_276.geometry} material={materials.App82} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_277.geometry} material={materials.App82} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_278.geometry} material={materials.App82} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_281.geometry} material={materials.AppE35} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_285.geometry} material={materials.AppF25} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_286.geometry} material={materials.AppF25} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_183.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_184.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_185.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_186.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_187.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_188.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_189.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_190.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_191.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_192.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_193.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_194.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_195.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_196.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_197.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_198.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_199.geometry} material={materials.App4E} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_25.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_26.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_27.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_28.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_29.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_30.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_31.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_32.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_33.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_34.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_35.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_36.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_37.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_38.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_39.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_40.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_41.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_42.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_43.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_44.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_45.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_46.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_47.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_48.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_49.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_50.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_51.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_52.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_53.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_54.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_55.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_56.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_57.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_58.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_59.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_60.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_61.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_62.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_63.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_64.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_65.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_66.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_67.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_68.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_69.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_70.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_71.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_72.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_73.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_74.geometry} material={materials.App302} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_217.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_218.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_219.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_220.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_221.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_222.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_223.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_224.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_225.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_226.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_227.geometry} material={materials.App8D4} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_279.geometry} material={materials.App52} />
                    <mesh castShadow receiveShadow geometry={nodes.Object_280.geometry} material={materials.App52} />
                </group>
            </group>
        </>
    );
}

useGLTF.preload('./models/bike.glb');