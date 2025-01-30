import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { memo, Suspense, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const MODEL_PATH = "/CharacterWork2/akshayanimation/akshay.glb";
type AnimationName = "Dance" | "Stand" | "Jump" | "Salute";

interface CharacterProps {
  animationName?: AnimationName; 
}

const Character = memo(function Character({
  animationName = "Stand", 
  ...props
}: CharacterProps) {
  const group = useRef();
  const { scene, animations } = useGLTF(MODEL_PATH);
  const { actions } = useAnimations(animations, group);

  const isSmallMobile = useMediaQuery({ maxWidth: 400 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const position = isSmallMobile
    ? [0, -6.0, 1]
    : isMobile
    ? [0, -4, 1]
    : isTablet
    ? [0, -5, 1]
    : [0, -5.7, 1];

  const scale = isSmallMobile
    ? 3
    : isMobile
    ? 1.95
    : isTablet
    ? 2
    : 2.95;

  //  animation playback
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
  const [animationName, setAnimationName] = useState<AnimationName>("Stand");

  // press events for WASD
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case "w":
          setAnimationName("Jump");
          break;
        case "a":
          setAnimationName("Dance");
          break;
        case "s":
          setAnimationName("Stand");
          break;
        case "d":
          setAnimationName("Salute");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, -1, 10], fov: 45 }}
      className="w-full h-screen absolute"
      onClick={() => { setAnimationName((prev)=> (prev === "Stand" ? "Dance" : "Stand"))}} 
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
