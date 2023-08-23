import React from 'react'
import styled from 'styled-components';
import Lighthouse from "./Lighthouse";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 200vh;
    scroll-snap-align: start;
  }
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  width: 1800px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%; 
    height: 200vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }
`
const Left = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
   display: none; 
   width: 0%;
  }
`
const Name = styled.h1`
  font-size: 60px;
  color: #CCC;
  @media only screen and (max-width: 768px) {
   font-size: 40px; 
  }
`
const Subtitle = styled.p`
  font-size: 24px;
  color: #8F558C;
  background-color: rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`

const Right = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex: 1;
    width: 100%;
  }
`

const SkillsContainer = styled.div`

`
const SkillGroup = styled.div`
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;

  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }
`;
const SkillCard = styled.div`
  background-color: rgba(46, 2, 2, 0.3);
  border-radius: 10px;
  padding: 15px;
  outline: rgba(245, 229, 130, 0.3) solid 1px;
  width: 70px;
  transition: transform 0.5s, box-shadow 0.5s;
  &:hover {
    transform: translateY(-10px) translateZ(10px) scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
`;
const SkillCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;
const SkillName = styled.p`
  margin: 0;
  color: white;
`;
const Category = styled.h3`
  margin: 20px 0;
  color: #CCC;
`;



const Introduction = () => {
  return (
    <Section id="intro">
      <Container>
        <Left>
          <Canvas>
                <Stage environment="city" intensity={5}>
                    <Lighthouse />
                </Stage>       
                <OrbitControls enableZoom={false} autoRotate/>
          </Canvas>
        </Left>
        <Right>
          <Name>About Me</Name>
          <Subtitle>
            Hello, I'm Aayush Deshpande, a versatile software developer. I'm into deep learning, data science, full-stack development, and cloud computing. Let's connect and explore the tech possibilities together!
          </Subtitle>
          <SkillsContainer>
            <Category>Programming Languages</Category>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                  <SkillName>Python</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                  <SkillName>C++</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                  <SkillName>C</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <SkillName>JavaScript</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup> 
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  <SkillName>HTML</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                  <SkillName>CSS</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                  <SkillName>Bash</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
          </SkillsContainer>
          <SkillsContainer>
            <Category>Frameworks</Category>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                  <SkillName>Django</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                  <SkillName>Flask</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <SkillName>React</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" />
                  <SkillName>Three.js</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            {/* Add more skill groups */}
          </SkillsContainer>
          <SkillsContainer>
            <Category>Development Tools</Category>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                  <SkillName>Docker</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" />
                  <SkillName>Jupyter</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" />
                  <SkillName>Jira</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
                  <SkillName>Postman</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                  <SkillName>Linux</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                  <SkillName>Git</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" />
                  <SkillName>Anaconda</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="./img/tableau-software.svg" />
                  <SkillName>Tableau</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="./img/bubble.svg" />
                  <SkillName>Bubble</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            {/* Add more skill groups */}
          </SkillsContainer>
          <SkillsContainer>
            <Category>Infrastructure and Libraries</Category>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" />
                  <SkillName>GCP</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"/>
                  <SkillName>PostgreSQL</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" />
                  <SkillName>Pandas</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />
                  <SkillName>NumPy</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
                  <SkillName>Tensorflow</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" />
                  <SkillName>OpenCV</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" />
                  <SkillName>Keras</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" />
                  <SkillName>Ubuntu</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            <SkillGroup>
              <SkillCard>
                <SkillCardContent>
                  <SkillIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
                  <SkillName>SSMS</SkillName>
                </SkillCardContent>
              </SkillCard>
            </SkillGroup>
            {/* Add more skill groups */}
          </SkillsContainer>
        </Right>
      </Container>
    </Section>
  );
}

export default Introduction;