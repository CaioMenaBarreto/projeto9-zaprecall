import styled from 'styled-components';
import Seta from "./assets/seta_play.png";
import Virar from "./assets/seta_virar.png";
import { useState } from 'react';

function Perguntas(props) {

    const { id, question, answer, primeiraTela, segundaTela, terceiraTela} = props;

    if (primeiraTela === true) {
        return (
            <Conteiner2>
                <Pergunta>
                    <p>Pergunta {id}</p>
                    <img src={Seta} alt="" />
                </Pergunta>
            </Conteiner2>    
        );
    }

}

const Conteiner2 = styled.div`
  width: 1279px; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FB6B6B;
`;

const Pergunta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: ${({ ativa }) => (ativa ? "131px" : "65px")};
  background-color: ${({ ativa }) => (ativa ? "#FFFFD5" : "#FFFFFF")};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 25px;
  white-space: nowrap;

  img {
    width: 20px;
    height: 23px;
    color: #333333;
    margin-right: 22px;
    align-self: flex-end;
    margin-bottom: 18px;
  }

  p {
    width: 87px;
    height: 19px;
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    color: #333333;
    margin-left: 22px;
    align-self: flex-start;
    margin-top: 18px;
  }
`;

const Resposta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: ${({ ativa }) => (ativa ? "131px" : "65px")};
  background-color: ${({ ativa }) => (ativa ? "#FFFFD5" : "#FFFFFF")};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-top: 25px;
  white-space: nowrap;

  img {
    display: none;
  }

  p {
    width: 87px;
    height: 19px;
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    color: #333333;
    margin-left: 22px;
    align-self: flex-start;
    margin-top: 18px;
  }
`;


export default Perguntas