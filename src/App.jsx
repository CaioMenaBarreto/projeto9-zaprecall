import { useState } from 'react';
import cards from './cards';
import styled from 'styled-components';
import Cabecalho from './Cabecalho';
import Perguntas from './Perguntas';


export default function App() {

  return (
    <Conteiner>
      <Cabecalho />
      <div>
        {cards.map((card) => {
          return (
            <Perguntas
              id={card.id}
              question={card.question}
              answer={card.answer}
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
  @media (max-width: 375px) {
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #FB6B6B;
  }
`;
