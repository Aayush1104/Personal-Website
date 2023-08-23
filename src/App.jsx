import Title from "./components/Title"
import Introduction from "./components/Introduction"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/dark-blue-red-blur-template-vector.jpg");
  background-size: cover;
  &::-webkit-scrollbar {
    display: none;
`


function App() {

  return (
    <Container>
      <Title/>
      <Introduction/>
      <Experience/>
      <Projects/>
      <Contact/>
    </Container>
  )
}

export default App
