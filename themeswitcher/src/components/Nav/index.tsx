import React from 'react';
import { Container, Button} from './styles';
import {  FormGroup, Label, Input, TitleForm} from './styles';
//import Imagem from '../../styles/img/login.png';


const Nav: React.FC =() =>{
    return(
    
    <Container >
    <TitleForm>
        Login
    </TitleForm>
    <FormGroup>
      <Label htmlFor="label">Nome:</Label>
      <Input id="label" />
      
    </FormGroup>
    <FormGroup>
      <Label >Senha:</Label>
      <Input type="password" />
   </FormGroup>
   <Button>
     Entrar
   </Button>
   </Container>
   
    );
}

export default Nav;