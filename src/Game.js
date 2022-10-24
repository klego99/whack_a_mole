import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three"
import "./styles/game.css";
import Diglett from "./components/Diglett";
import Hammer2 from "./components/Cartoon_hammer";
import Hole from "./components/Hole";
import Diglett2 from "./components/Diglett copy";
import Diglett3 from "./components/Diglett copy 2";
import Diglett4 from "./components/Diglett copy 3";
import Diglett5 from "./components/Diglett copy 4";
import Diglett6 from "./components/Diglett copy 5";
import Diglett7 from "./components/Diglett copy 6";
import Diglett8 from "./components/Diglett copy 7";
import Diglett9 from "./components/Diglett copy 8";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Grass from "./components/Grass";
import { BooleanKeyframeTrack, VectorKeyframeTrack } from "three";

const Game = () =>{
  const [hammerPos, setPos] = useState({x: 0, y: 0, z: 0});
  const offset = 2;
  const [diglettY, setY]= useState({A:-3,B:-3,C:-3,D:-3,E:-3,F:-3,G:-3,H:-3,I:-3})
  function setRandom(){
    const rand = Math.floor(Math.random() * 9);
    switch(rand){
      case 0:
        diglettY.A=0


    }

  }

  function Bonk(index){
    switch(index){
      case 0:
        hammerPos.x = 0 + offset;
        hammerPos.z = 0;
        break;
      case 1:
        hammerPos.x = 6 + offset;
        hammerPos.z = 0;
        break;
      case 2:
        hammerPos.x = -6 + offset;
        hammerPos.z = 0;
        break;
      case 3:
        hammerPos.x = 0 + offset;
        hammerPos.z = 6;
        break;
      case 4:
        hammerPos.x = -6 + offset;
        hammerPos.z = 6;
        break;
      case 5:
        hammerPos.x = 6 + offset;
        hammerPos.z = 6;
        break;
      case 6:
        hammerPos.x = 6 + offset;
        hammerPos.z = -6;
        break;
      case 7:
        hammerPos.x = 0 + offset;
        hammerPos.z = -6;
        break;
      case 8:
        hammerPos.x = -6 + offset;
        hammerPos.z = -6;
        break;
    }
  }

  return (
    <div id="game">
      <div> 게임 화면 </div>
      <Canvas>
        <OrbitControls />
        <PerspectiveCamera makeDefault fov={90} position={[0, 4, 10]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[20, 20, 20]} angle={0.3} />
        <Suspense fallback={null}>
          <Hammer2 position={[hammerPos.x, hammerPos.y, hammerPos.z]} scale={[1,1,1]} />       
          <Diglett position={[0, -3, 0]} scale={[5, 5, 5]} onClick={ () => {Bonk(0)}}/>
          <Diglett2 position={[6, -3, 0]} scale={[5, 5, 5]} onClick={ () => {Bonk(1)}}/>
          <Diglett3 position={[-6, -3, 0]} scale={[5, 5, 5]} onClick={ () => {Bonk(2)}}/>
          <Diglett4 position={[0, -3, 6]} scale={[5, 5, 5]} onClick={ () => {Bonk(3)}}/>
          <Diglett5 position={[-6, -3, 6]} scale={[5, 5, 5]} onClick={ () => {Bonk(4)}}/>
          <Diglett6 position={[6, -3, 6]} scale={[5, 5, 5]} onClick={ () => {Bonk(5)}}/>
          <Diglett7 position={[6, -3, -6]} scale={[5, 5, 5]} onClick={ () => {Bonk(6)}}/>
          <Diglett8 position={[0, -3, -6]} scale={[5, 5, 5]} onClick={ () => {Bonk(7)}}/>
          <Diglett9 position={[-6, -3, -6]} scale={[5, 5, 5]} onClick={ () => {Bonk(8)}}/>
          <Grass position={[0, -1, 0]} scale ={[5,5,5]}/>
          <Hole position={[0, 0, 0]} scale ={[3,3,3]}/>
          <Hole position={[6, 0, 0]} scale ={[3,3,3]}/>
          <Hole position={[-6, 0, 0]} scale ={[3,3,3]}/>

          <Hole position={[0, 0, 6]} scale ={[3,3,3]}/>
          <Hole position={[6, 0, 6]} scale ={[3,3,3]}/>
          <Hole position={[-6, 0, 6]} scale ={[3,3,3]}/>

          <Hole position={[0, -0.5, -6]} scale ={[3,3,3]}/>
          <Hole position={[6, -0.5 ,-6]} scale ={[3,3,3]}/>
          <Hole position={[-6, -0.5, -6]} scale ={[3,3,3]}/>
        </Suspense>

      </Canvas>
    </div>
  );
}
export default Game;