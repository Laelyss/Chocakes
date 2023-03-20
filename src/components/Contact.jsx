import React from 'react';
import Maps from './Maps';
import styled from 'styled-components';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: justify;
justify-content: space-between;
`;

const Left = styled.div`
/* flex: 1 1 0%; */
display: flex;
/* -webkit-box-align: center; */
flex-direction: column;
gap: 10px;
padding-left: 10%;
`;

const Title = styled.h1`
  font-weight: 200px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 20px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 5px;
  border: none;
  background-color: #825D4B;
  color: white;
  border-radius: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 2;
`;

const handleSubmit = (e) => {
  e.preventDefault();

  
}

export const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Contact</Title>
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <TextArea placeholder="Message" row={10}/>
            <Button type="submit">Send</Button>
          </Form>
        </Left>
        <Right>
          <Maps />
        </Right>
      </Container>
    </Section>
  )
}


export default Contact