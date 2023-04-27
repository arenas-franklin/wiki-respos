import React from 'react';
import { Container } from './styles';
import gitLogo from '../assets/github.png';
import Input from '../components/Imput';
import ItemRepo from '../components/ItemRepo';

const App = () => {


  
  return (
      < Container >
        <img src={gitLogo} width={72} height={72} />
        <Input/>
        <ItemRepo/>
      </Container >
    
  );
}

export default App

