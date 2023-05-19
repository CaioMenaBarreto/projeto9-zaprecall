import styled from 'styled-components';
import Seta from "./assets/seta_play.png";
import Virar from "./assets/seta_virar.png";
import { useState } from 'react';

function Perguntas(props) {

    const [primeiraTela, setPrimeiraTela] = useState(true);
    const [segundaTela, setSegundaTela] = useState(false);
    const [terceiraTela, setTerceiraTela] = useState(false);

    const { id, question, answer } = props;


    function mostrarPergunta(idDaQuestao) {
        setPrimeiraTela(false);
        setSegundaTela(true);
        console.log(question);
    }

    function mostrarResposta(idDaResposta) {
        setSegundaTela(false);
        setTerceiraTela(true);
        console.log(answer);
    }

    if (primeiraTela === true) {
        return (
            <Conteiner2>
                <Pergunta>
                    <Texto>Pergunta {id}</Texto>
                    <img onClick={() => mostrarPergunta(id)} src={Seta} alt="" />
                </Pergunta>
            </Conteiner2>
        );
    }

    if (segundaTela === true) {
        return (
            <Conteiner2>
                <Pergunta ativa={segundaTela === true}>
                    <Texto>{question}</Texto>
                    <img onClick={() => mostrarResposta(id)} src={Virar} alt="" />
                </Pergunta>
            </Conteiner2>
        );
    }

    if (terceiraTela === true) {
        return (
            <Conteiner2>
                <Pergunta ativa={terceiraTela === true}>
                    <Texto>{answer}</Texto>
                    <ConteinerOpções>
                        <NãoLembrei onClick={finalizarCard}>
                            <p>Não</p>
                            <p>Lembrei</p>
                        </NãoLembrei>
                        <QuaseNãoLembrei onClick={finalizarCard}>
                            <p>Quase não lembrei</p>
                        </QuaseNãoLembrei>
                        <Zap onClick={finalizarCard}>
                            <p>Zap!</p>
                        </Zap>
                    </ConteinerOpções>
                </Pergunta>
            </Conteiner2>
        );
    }

}

const Zap = styled.div`
    width: 85px;
    height: 37px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #2FBE34;
    border-radius: 5px;

    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        color: #FFFFFF;
    }    
`;

const QuaseNãoLembrei = styled.div`
    width: 85px;
    height: 37px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: #FF922E;
    border-radius: 5px;

    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        color: #FFFFFF;
    }    
`;

const NãoLembrei = styled.div`
    width: 85px;
    height: 37px;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: #FF3030;
    border-radius: 5px;

    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        color: #FFFFFF;
    }    
`;

const ConteinerOpções = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Conteiner2 = styled.div`
  width: 1279px; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #FB6B6B;
  @media(max-width: 375px){
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #FB6B6B;
  }
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
  flex-wrap: wrap;
  position: relative;
  img {
    width: 20px;
    height: 23px;
    color: #333333;
    margin-right: 22px;
    align-self: flex-end;
    justify-self: flex-end;
    margin-bottom: 18px;
    position: absolute;
    right: 0;
  }

  @media(max-width: 375px){
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: ${({ ativa }) => (ativa ? "131px" : "65px")};
    background-color: ${({ ativa }) => (ativa ? "#FFFFD5" : "#FFFFFF")};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;

  img{
    width: 20px;
    height: 23px;
    color: #333333;
    margin-right: 22px;
    align-self: flex-end;
    justify-self: flex-end;
    margin-bottom: 18px;
    }
  }
`;

const Texto = styled.div`
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    color: #333333;
    margin-left: 22px;
    align-self: flex-start;
    margin-top: 18px;
  `

export default Perguntas