import { useState } from 'react';
import cards from './cards';
import styled from 'styled-components';
import Cabecalho from './Cabecalho';
import Perguntas from './Perguntas';


export default function App() {
  const [cont, setCont] = useState(0);

  return (
    <Conteiner>
      <Cabecalho />
      <GuardaPerguntas>
        {cards.map((card) => {
          return (
            <Perguntas
              id={card.id}
              question={card.question}
              answer={card.answer}
              cont={cont}
              setCont={setCont}
            />
          );
        })}
      </GuardaPerguntas>
      <Footer data-test="footer">
        <TextFooter>{cont}/8 CONCLUÍDOS</TextFooter>
      </Footer>
    </Conteiner>
  );
}

const GuardaPerguntas = styled.div`
  width: 1279px;
  margin-bottom: 90px;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Conteiner = styled.div`
  width: 1279px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fb6b6b;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const Footer = styled.div`
  width: 375px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  justify-content: center;
  margin-top: 180px;

  @media (max-width: 375px) {
    width: 100%;
  }
`;

const TextFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
`;
