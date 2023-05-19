import { useState } from 'react';
import cards from './cards';
import styled from 'styled-components';
import Cabecalho from './Cabecalho';
import Perguntas from './Perguntas';


export default function App() {
  const [primeiraTela, setPrimeiraTela] = [true];
  const [segundaTela, setSegundaTela] = [false];
  const [terceiraTela, setTerceiraTela] = [false];


  return (
    <Conteiner>
      <Cabecalho />
      <div>
        {cards.map((card)=>{
          return(
            <Perguntas  
            id={card.id}
            question={card.question}
            answer={card.answer}
            primeiraTela={primeiraTela}
            segundaTela={segundaTela}
            terceiraTela={terceiraTela}
            />
          );
        })}
      </div>
    </Conteiner>
    
  );
}

const Conteiner = styled.div`
  width: 1279px; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FB6B6B;
`;
