import React from 'react'
import styled from 'styled-components';

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

const BigContainer = styled.div`
  height: 100%;
  scroll-snap-align: start;
  width: 1800px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 200vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`
const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 100px auto; /* Center the timeline horizontally */
  margin-top: 50px;
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 100%;
    background: #470175;
    top: 0;
    left: 50%;
    margin-left: -3px;
    z-index: 1;
    animation: moveline 6s linear forwards;
    
    @media screen and (max-width: 768px) {
      left: 31px;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 50px auto;
  }

  @keyframes moveline {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
`


const Container = styled.div`
  padding: 10px 50px;
  position: relative;
  width: 60.7%;
  animation: movedown 1s linear forwards;
  opacity: 0;

  @keyframes movedown {
    0% {
      opacity: 1;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 1s;
  }
  &:nth-child(3) {
    animation-delay: 2s;
  }
  &:nth-child(4) {
    animation-delay: 3s;
  }
  &:nth-child(5) {
    animation-delay: 4s;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
    padding-left: 80px;
    padding-right: 25px;
  }
`
const Textbox = styled.div`
  padding: 20px 30px;
  background: #220038;
  position: relative;
  border-radius: 6px;
  font-size: 15px;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  border: 1px solid #CCC;
`
const Company = styled.h2`
  color: #5064e6;
  font-weight: 600;
`
const Duration = styled.small`
  color: #8F558C;
  display: inline-block;
  margin-bottom: 15px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`
const Role = styled.li`
  color: #FFF;
  text-weight: 100;
  font-family: 'Roboto', sans-serif;

`
const Container_left = styled(Container)`
  z-index: 2;
  left: -19%;
  @media screen and (max-width: 768px) {
    left: 0;
  }
`

const Container_right = styled(Container)`
  left: 50%;
  z-index: 2;

  @media screen and (max-width: 768px) {
    left: 0;
  }
`
const Logo_right = styled.img`
  position: absolute;
  top: 32px;
  z-index: 2;
  left: -20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;

  @media screen and (max-width: 768px) {
    left: 10px;
  }
  
`

const Logo_left = styled.img`
  position: absolute;
  top: 32px;
  z-index: 2;
  right: -20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  
  @media screen and (max-width: 768px) {
    left: 10px;
  }
`

const Left_Arrow = styled.span`
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 16px solid #470175;
  right: -15px;
  @media screen and (max-width: 768px) {
    border-right: 15px solid rgba(125, 92, 2, 0.8);
    border-left: 0;
    left: -15px;
  }
`

const Right_Arrow = styled.span`
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid #470175;
  left: -15px;
  @media screen and (max-width: 768px) {
    border-right: 15px solid rgba(125, 92, 2, 0.8);
    border-left: 0;
    left: -15px;
  }
`

const Title = styled.h1`
  color: #CCC;
  font-size: 50px;
  text-align: center;
  padding-top: 50px;
  
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`

const RoleList = styled.ul`
  color: #FFF;
  font-weight: 100;
  font-family: 'Roboto', sans-serif;
  padding-left: 30px; /* Add left padding for bullet points */
`



const Experience = () => {
  return (
      <Section id="experience">
        <BigContainer>
        <Title>Experience</Title>
        <Timeline>
          <Container_left>
            <Logo_left src= "./img/nugget.png"></Logo_left>
            <Textbox>
              <Company>Nugget Data | Software Developer</Company>
              <Duration>May 2023 - August 2023</Duration>
              <RoleList>
                <Role>Developed robust backend APIs with Django, driving high-speed data processing, forming a basis for an innovative full-stack system, smoothly blended with Bubble's frontend, enabling real-time customer updates.</Role>
                <Role>Exemplified precision via rigorous unit tests, certifying scraped data accuracy.</Role>
                <Role>Honed server management by refining loss functions on Google Cloud using an advanced sentence transformer model, heightening semantic matching precision in machine learning.</Role>
              </RoleList>
              <Left_Arrow></Left_Arrow>
            </Textbox>
          </Container_left>
          <Container_right>
            <Logo_right src= "./img/kumon.jpeg"></Logo_right>
            <Textbox>
              <Company>Kumon | Mathematics Instructor</Company>
              <Duration>June 2021 - May 2022</Duration>
              <RoleList>
                <Role>Offered focused student support, using adept teaching and communication to simplify intricate math concepts.</Role>
                <Role>Organized, audited, and logged 200+ student homework data for thorough analysis.</Role>
                <Role>Demonstrated a strong work ethic and punctuality, driving exceptional academic growth in 15+ students.</Role>
              </RoleList>
              <Right_Arrow></Right_Arrow>
            </Textbox>
          </Container_right>
          <Container_left>
          <Logo_left src= "./img/Stem fellowship.jpeg"></Logo_left>
            <Textbox>
              <Company>WCS STEM Fellowship | Head of Internal Affairs</Company>
              <Duration>September 2021 - June 2022</Duration>
              <RoleList>
                <Role>Expertly managed meeting minutes and facilitated clear communication of team plans, resulting in optimized workflow and elevated outcomes.</Role>
                <Role>Crafted visually impactful posters and newsletters utilizing graphic design tools, effectively boosting awareness and participation in school events.</Role>
              </RoleList>
              <Left_Arrow></Left_Arrow>
            </Textbox>
          </Container_left>
          <Container_right>
            <Logo_right src= "./img/ignite.png"></Logo_right>
            <Textbox>
              <Company>Ignite Science | Director of Events</Company>
              <Duration>June 2021 - June 2022</Duration>
              <RoleList>
                <Role>Conceptualized and executed a successful STEM Summer Camp, fostering STEM skills in grades 5+ with engaging learning in a supportive environment, and raising over $500 in donations for local charities.</Role>
                <Role>Demonstrated exceptional collaboration and teamwork skills while planning impactful events with colleagues, resulting in outstanding team outcomes.</Role>
                <Role>Cultivated meaningful connections with industry experts in STEM fields, securing a series of informative webinars for high school students.</Role>
              </RoleList>
              <Right_Arrow></Right_Arrow>
            </Textbox>
          </Container_right>
        </Timeline>
        </BigContainer>
      </Section>
  )
}

export default Experience