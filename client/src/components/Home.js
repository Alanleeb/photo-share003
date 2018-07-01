import React, { Component } from 'react';
import { 
  Container,
  Header,
  Image,
} from 'semantic-ui-react';
import styled from 'styled-components'
import NavBar from './NavBar';

class Home extends Component {
  render() {
    return (
<Container>
      <HeaderImage>
        <NavContainer>
        <NavBar />
        </NavContainer>
        <HeadContainer>
           <Header as='h1'  color="inverted">Authentic Adventure</Header>
           </HeadContainer>
      </HeaderImage>
  </Container>
    );
  }
}

const HeaderImage = styled.div`
  background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f093285a418b6aadfc00bd4b8354ec02&auto=format&fit=crop&w=1350&q=80');
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;
  margin-bottom: 30px;
  color: white;
`
const HeadContainer = styled.div`
display: flex;
align-self: flex-end;
justify-content: center;
`
const NavContainer = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex: space-around;
color: inverted;
`



export default Home;
