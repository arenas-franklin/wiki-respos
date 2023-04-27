import React from 'react';
import { ItemContainer } from './styles';


const ItemRepo = () => {
  return (
    <ItemContainer>
      <h3>Adiarla</h3>
      <p>dio/dydy</p>
      <a href="#" >Ver repositório</a>
      <br/>
      <a href="#" className="remover">Remover</a>
      <hr/>

    </ItemContainer>
  )
}

export default ItemRepo