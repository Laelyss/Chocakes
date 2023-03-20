import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
display: flex;
/* flex-direction: column; */
/* -webkit-box-align: center; */
align-items: center;
-webkit-box-pack: justify;
scroll-snap-align: center;
height: 100vh;
justify-content: center;
`;

const Container = styled.div`
  display: flex;
  /* -webkit-box-align: center; */
  /* -webkit-box-pack: justify; */
  /* scroll-snap-align: center; */
  flex-direction: column;
`;

const Left = styled.div`
  flex: 2;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column; 
  justify-content: center;
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


export const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Hi, I'm John Doe</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, temporibus!
          </Desc>
          <Button>Oy</Button>
        </Left>
        <Right>
          {/* 3d ici */}
        </Right>

      </Container>
    </Section>
  )
}

export default Who