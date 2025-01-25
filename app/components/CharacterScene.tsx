import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { memo, Suspense, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

// Single model containing both animations
const MODEL_PATH = "/CharacterWork2/akshayanimation/akshay.glb";

const Character = memo(function Character({ animationName = "Stand", ...props }) {
  const group = useRef();
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions } = useAnimations(animations, group);

  // Media queries for responsive scaling and positioning
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const position = isSmallMobile
    ? [0, -5, 1]
    : isMobile
    ? [0, -4, 1]
    : isTablet
    ? [0, -5, 1]
    : [0, -5.7, 1];

  const scale = isSmallMobile
    ? 2.5
    : isMobile
    ? 1.95
    : isTablet
    ? 2
    : 2.95;

  // Handle animation playback
  useEffect(() => {
    if (actions && actions[animationName]) {
      const action = actions[animationName];
      action.reset().fadeIn(0.5).play();
      
      return () => {
        action.fadeOut(0.5);
      };
    }
  }, [actions, animationName]);

  return (
    <group
      ref={group}
      position={position}
      scale={scale}
      {...props}
      dispose={null}
    >
      <primitive object={scene} />
    </group>
  );
});

const CharacterScene = () => {
  const [animationName, setAnimationName] = useState("Stand");

  return (
    <Canvas
      camera={{ position: [0, -1, 10], fov: 35 }}
      className="w-full h-full"
      onClick={() => setAnimationName(prev => prev === "Stand" ? "Dance" : "Stand")}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Character animationName={animationName} />
      </Suspense>
      <OrbitControls
        target={[-0, -3, 1]}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
};

useGLTF.preload(MODEL_PATH);
export default CharacterScene;