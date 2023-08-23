import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Map from './Map';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  display: flex;
  scroll-snap-align: start;
  justify-content: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media only screen and (max-width: 1000px) {
    justify-content: center;
  }
`
const Title = styled.h1`
  font-weight: 200; 
`
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  background-color: rgba(0,0,0,0.7);
  padding: 50px;
  border-radius: 10px;

  @media only screen and (max-width: 1000px) {
    width: 80%;
  }
`
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`
const Button = styled.button`
  background-color: #8a7604;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

const CreditsIcon = styled.img`
  position: fixed;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
  height: 20px;
  width: 20px;
`

const Credits = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0);
  font-size: 12px;
`

const Instagram = styled.a`
  position: fixed;
  bottom: 50px;
  left: 20px;
  cursor: pointer;
  height: 20px;
  width: 20px;
`
const Linkedin = styled.a`
  position: fixed;
  bottom: 80px;
  left: 20px;
  cursor: pointer;
  height: 20px;
  width: 20px;
`
const Github = styled.a`
  position: fixed;
  bottom: 110px;
  left: 20px;
  cursor: pointer;
  height: 20px;
  width: 20px;
`
const Hashnode = styled.a`
  position: fixed;
  bottom: 140px;
  left: 20px;
  cursor: pointer;
  height: 20px;
  width: 20px;
`
const Contacting = styled.div`
  flex-direction: column;
`

const Img = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
`

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [showCredits, setShowCredits] = useState(false); // State for showing credits


  const handleSubmit =e=> {
    e.preventDefault();

    emailjs.
      sendForm(
        'service_ew46601', 
        'template_7e3v6uv', 
        ref.current, 
        'plehaoJMiharTa4Xx'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        }, 
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  }
  const handleCreditsClick = () => {
    setShowCredits(!showCredits);
  };

  const handleCreditsClose = () => {
    setShowCredits(false);
  };
  return (
    <Section id="contact">
      <Container>
        <Left>
          <Contacting>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact Me</Title>
              <Input placeholder="Name" name="name"/>
              <Input placeholder="Email" name="email"/>
              <TextArea placeholder="Write your message" name="message" rows={10}/>
              <Button type="submit">Send</Button>
              {success &&
                "Your message has been sent successfully!"}
                <CreditsIcon 
                src = "./img/icon.png"
                alt = "Show Credits"
                onClick={handleCreditsClick}/>
                {showCredits && (
                  <Credits onClick={handleCreditsClose}>
                    "Floating Lighthouse" (https://skfb.ly/6UVrr) by Kathrin&Christian
                    is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
                  </Credits>
              )}
            <Github 
            href="https://github.com/Aayush1104"
            target="_blank"
            rel="noopener noreferrer">
              <Img src="./img/GithubIcon.png" alt="Github"/>
            </Github>
            <Linkedin 
            href="https://www.linkedin.com/in/aayush-deshpande/?trk=public_profile_browsemap&originalSubdomain=ca"
            target="_blank"
            rel="noopener noreferrer">
              <Img src="./img/LinkedinIcon.png" alt="LinkedIn" />
            </Linkedin>
            <Instagram href="https://www.instagram.com/aayush.deshpande11/?hl=en"
            target="_blank"
            rel="noopener noreferrer">
              <Img src="./img/InstagramIcon.png" alt="Instagram"/>
            
            </Instagram>
            <Hashnode href="https://aayush-deshpande.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer">
              <Img src="./img/HashnodeIcon.png" alt="Hashnode"/>
            </Hashnode>
            </Form>
          </Contacting>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact