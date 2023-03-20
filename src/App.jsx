import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  smooth-scroll-behavior: smooth !important;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/111.jpg");
  &::-webkit-scrollbar { 
    display: none;
  }
`;

function App() {
  return (
    <Container >
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;