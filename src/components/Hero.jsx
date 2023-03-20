import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  scroll-snap-align: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column; 
  justify-content: center;
`;

const Img = styled.img`
  width: 90%;
  object-fit: contain;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateX(35px);
    }
  }
`;

const Right = styled.div`
  flex: 3;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 75px;
`;

const Desc = styled.p`
  font-size: 20px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  border: none;
  background-color: #825D4B;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

export const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          {/* 3d ici */}
          <Img src="./img/me.png" />
        </Left>

        <Right>
          <Title>Hi, I'm John Doe</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, temporibus!
          </Desc>
          <Button>Oy</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero