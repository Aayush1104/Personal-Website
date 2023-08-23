import React, {useState} from 'react'
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    height: 375vh;
    width: 100%;
  }
  id="projects"
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  width: 1800px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  
  @media screen and (max-width: 1000px) {
    height: 375vh;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    width: 100%;
  }
`

const Title = styled.h1`
  color: #CCC;
  font-size: 50px;
  text-align: center;
  margin-bottom: 50px;
  padding-top: 100px;
  @media screen and (max-width: 1000px) {
    font-size: 40px;
    padding-top: 50px;
  }
`
const Subtitle = styled.p`
  font-size: 24px;
  color: #8F558C;
  background-color: rgba(0,0,0,0.3);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  width: 50%;
  align-self: center;
  text-weight: 300;
`

const ProjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  height: 20%;
  width: 100%;
  padding-top: 100px;
`;

const ProjectCard = styled.div`
  min-width: 350px;
  width: calc(50% - 700px); /* Adjust the width based on your design */
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(46, 2, 2, 0.7);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    transform: ${({ mouseX, mouseY }) => `
      perspective(1000px)
      rotateX(${(mouseY / 20 - 10)}deg)
      rotateY(${(10 - mouseX / 30)}deg)
    `};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

const ProjectImage = styled.img`
  width: 370px;
  height: 260px;
  border-radius: 6px;
  margin-bottom: 10px;
`;

const ProjectName = styled.h3`
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
  text-align: center;
`;

const ProjectDescription = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  margin-top: auto;
`;

const IconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Projectlink = styled.a`
  text-decoration: none;
`

const Projects = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.nativeEvent.clientX - cardRect.left;
    const offsetY = e.nativeEvent.clientY - cardRect.top;

    setMouseX(offsetX);
    setMouseY(offsetY);
  };
  return (
    <Section id="projects" >
      <Container >
      <Title>My Projects</Title>
      <Subtitle>Here are some of my projects, feel free to click on them for more details!</Subtitle>
      <ProjectCards>
        <ProjectCard
          onMouseMove={handleMouseMove}
          mouseX={mouseX}
          mouseY={mouseY}>
          <Projectlink 
          href="https://github.com/Aayush1104/Face-Identification"
          target="_blank"
          rel="noopener noreferrer">
            <ProjectImage src="./img/Face-ID Project.png" />
            <ProjectName>Facial Identification</ProjectName>
            <IconRow>
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" />
              <IconImage src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" />
            </IconRow>
            <ProjectDescription>
            This project showcases facial recognition using Siamese Neural Networks. The Siamese architecture is employed for face verification and identification tasks. The system captures real-time images, processes them, and verifies their authenticity using a trained model. It's a practical foundation for creating facial recognition systems for applications like access control and security systems.
            </ProjectDescription>
          </Projectlink>
        </ProjectCard>
        <ProjectCard
          onMouseMove={handleMouseMove}
          mouseX={mouseX}
          mouseY={mouseY}>
          <Projectlink href = "https://github.com/Aayush1104/WeatherApp"
          target="_blank"
          rel="noopener noreferrer">
            <ProjectImage src="./img/Weather.png" />
            <ProjectName>Weather App</ProjectName>
            <IconRow>
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            </IconRow>
            <ProjectDescription>
            This website offers real-time weather information powered by the OpenWeatherMap API. It features animated weather icons, live geolocation-based updates, intuitive city searches, and elegant time and date displays. The technology is Python-based for a seamless and straightforward user experience.
            </ProjectDescription>
          </Projectlink>
        </ProjectCard>
        <ProjectCard
          onMouseMove={handleMouseMove}
          mouseX={mouseX}
          mouseY={mouseY}>
          <Projectlink href ="https://github.com/Aayush1104/finance"
          target="_blank"
          rel="noopener noreferrer">
            <ProjectImage src="./img/Stock.png" />
            <ProjectName>Stock Market Replica</ProjectName>
            <IconRow>
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
            </IconRow>
            <ProjectDescription>
            This Python project provides an immersive experience by allowing users to create accounts, explore real-time stock trends using the IEX API, and engage in a virtual stock market simulation with a starting capital of $10,000 USD. Built on the Flask framework, it combines user authentication, real-time data retrieval, and transaction history for a comprehensive exploration of financial markets.
            </ProjectDescription>
          </Projectlink>
        </ProjectCard>
        <ProjectCard
          onMouseMove={handleMouseMove}
          mouseX={mouseX}
          mouseY={mouseY}>
          <Projectlink href="https://github.com/Aayush1104/EconomicIndicators"
          target="_blank"
          rel="noopener noreferrer">
            <ProjectImage src="./img/EconInd.png" />
            <ProjectName>Economics Indicator</ProjectName>
            <IconRow>
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
              <IconImage src="./img/tableau-software.svg" />
              <IconImage src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" />
            </IconRow>
            <ProjectDescription>
            Using Python in Visual Studio, the project efficiently fetched live API data on currency rates relative to the USD. The API data was imported into SQL Server using the pyodbc library. The project designed and managed various tables covering GDP, population, and currency rates through SQL Query. The extracted insights were utilized to create informative visualizations in Tableau, offering a comprehensive representation of intricate economic relationships.
            </ProjectDescription>
          </Projectlink>
        </ProjectCard>
      </ProjectCards>
      </Container>
    </Section>
  );
};

export default Projects;