import React from 'react'
import styled from 'styled-components';
import {Canvas} from '@react-three/fiber' 
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    width: 100%;
  }
`
const Container = styled.div`
  height: 100%;
  scroll-snap-align: start;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

`
const Left = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    width: 100%;
  }
`
const Name = styled.h1`
  font-size: 74px;
  color: #CCC;
  font-weight: bold; /* Make the text bold */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Add a text shadow for a pop-out effect */
  @media only screen and (max-width: 768px) {
   text-align: center; 
   font-size: 50px;
  }
`;

const SmallHead = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    
  }
`

const Line = styled.img`
  height: 10px;
  padding-bottom: 30px;
  @media only screen and (max-width: 768px) {
    display: none;
    
  }
`

const Subtitle = styled.p`
  font-size: 30px;
  color: #8F558C;
  font-weight: 300; /* Make the text bold */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); /* Add a text shadow for a pop-out effect */
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }

`

const Right = styled.div`
  flex: 4.7;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

const Me = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ccc;
  background-image: url(./img/me.png);
  background-size: cover;
  background-position: center;
  object-fit: contain;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(10px);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`

const Title = () => {
    return (
        <Section id="home">
          <Container>
            <Left>
              <Name>Aayush Deshpande</Name>
              <SmallHead>
                <Line src="./img/line.png"></Line>
                <Subtitle>Second-year Computer Engineering student at the University of Waterloo</Subtitle>
              </SmallHead>
            </Left>
            <Right>
              <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <Sphere args={[1, 50, 200]} scale={2}>
                  <MeshDistortMaterial color="#9932FF" attach="material" distort={0.5} speed={2}/>
                </Sphere>
              </Canvas>
              <Me/>
            </Right>
          </Container>
        </Section>
    )
}

export default Title
