import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
const Character = (props) => {
  const { nodes, materials } = useGLTF("/67575a1b7e71f93ae71ca206.glb");
  const isSmallMobile = useMediaQuery({ maxWidth: 400 }); // `md` breakpoint
  const isMobile = useMediaQuery({ maxWidth: 767 }); // `md` breakpoint
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 }); // Between `md` and `lg`

  // Adjust position based on device size
  const position = isSmallMobile
    ? [0,-4,1] :isMobile ? [0,-4, 1] // Mobile
    : isTablet
    ? [0, -5, 1] // Tablet
    : [0, -5.7, 1]; // Desktop
    const scale = isSmallMobile
    ? 2 :isMobile ? 1.95 // Mobile
    : isTablet
    ? 2 // Tablet
    : 2.75; // Desktop


  return (
    <group {...props} dispose={null} scale={scale} position={position}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  );
};

const CharacterScene = () => {
  return (
    <Canvas camera={{ position: [0, -1, 10], fov: 35 }} className="w-4/5">
      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 10]} intensity={1} />
      {/* Suspense for async model loading */}
      <Suspense fallback={null}>
        <Character />
      </Suspense>
      {/* Controls */}
      <OrbitControls target={[-0, -3, 1]} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2}  enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

useGLTF.preload("/67575a1b7e71f93ae71ca206.glb");

export default CharacterScene;
