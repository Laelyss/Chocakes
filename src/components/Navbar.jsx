import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    padding: 20px 0;
`

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`
const Logo = styled.img`
    height: 20px;
`

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`

const ListItem = styled.li`
    cursor: pointer;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const Icon = styled.img`
    height: 20px;
    curosr: pointer;
`

const Button = styled.button`
    width: 100px;
    padding: 10px;
    border: none;
    background-color: #825D4B;
    color: white;
    border-radius: 10px;
    cursor: pointer;
`


export const Navbar = () => {
  return (
    <Section>
        <Container> 
            <Links>
                <Logo src="./img/clef.png" />
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Links</ListItem>
                    <ListItem>Links</ListItem>
                    <ListItem>Links</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png" />
                <Button>Hey</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar