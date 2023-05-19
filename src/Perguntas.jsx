import styled from 'styled-components';
import Seta from "./assets/seta_play.png";
import Virar from "./assets/seta_virar.png";
import Erro from './assets/icone_erro.png';
import Quase from './assets/icone_quase.png';
import Certo from './assets/icone_certo.png';
import { useState } from 'react';

function Perguntas(props) {

    const [primeiraTela, setPrimeiraTela] = useState(true);
    const [segundaTela, setSegundaTela] = useState(false);
    const [terceiraTela, setTerceiraTela] = useState(false);
    const [quartaTela, setQuartaTela] = useState(false);
    const [quintaTela, setQuintaTela] = useState(false);
    const [sextaTela, setSextaTela] = useState(false);
    const [imagemResposta, setImagemResposta] = useState(null);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');


    const { id, question, answer, cont, setCont} = props;


    function mostrarPergunta(idDaQuestao) {
        setPrimeiraTela(false);
        setSegundaTela(true);
    }

    function mostrarResposta(idDaResposta) {
        setSegundaTela(false);
        setTerceiraTela(true);
    }

    function finalizarCardErro(idDaResposta) {
        setTerceiraTela(false);
        setQuartaTela(true);
        setCont((prevCont) => prevCont + 1);
        setImagemResposta(Erro);
        setOpcaoSelecionada('erro');
    }
    
    function finalizarCardQuase(idDaResposta) {
        setTerceiraTela(false);
        setQuartaTela(true);
        setCont((prevCont) => prevCont + 1);
        setImagemResposta(Quase);
        setOpcaoSelecionada('quase');
    }
    
    function finalizarCardZap(idDaResposta) {
        setTerceiraTela(false);
        setQuartaTela(true);
        setCont((prevCont) => prevCont + 1);
        setImagemResposta(Certo);
        setOpcaoSelecionada('zap');
    }



    if (primeiraTela === true) {
        return (
                <Conteiner2 data-test="flashcard">
                    <Pergunta>
                        <Texto data-test="flashcard-text" >Pergunta {id}</Texto>
                        <img data-test="play-btn" onClick={() => mostrarPergunta(id)} src={Seta} alt="" />
                    </Pergunta>
                </Conteiner2>
        );
    }

    if (segundaTela === true) {
        return (
            <Conteiner2 data-test="flashcard">
                <Pergunta ativa={segundaTela === true}>
                    <Texto data-test="flashcard-text">{question}</Texto>
                    <img data-test="turn-btn" onClick={() => mostrarResposta(id)} src={Virar} alt="" />
                </Pergunta>
            </Conteiner2>
        );
    }

    if (terceiraTela === true) {
        return (
            <Conteiner2 data-test="flashcard">
                <Pergunta ativa={terceiraTela === true}>
                    <Texto data-test="flashcard-text">{answer}</Texto>
                    <ConteinerOpções>
                        <NãoLembrei data-test="no-btn" onClick={() => finalizarCardErro(id)}>
                            <p>Não</p>
                            <p>Lembrei</p>
                        </NãoLembrei>
                        <QuaseNãoLembrei data-test="partial-btn" onClick={() => finalizarCardQuase(id)}>
                            <p>Quase não lembrei</p>
                        </QuaseNãoLembrei>
                        <Zap data-test="zap-btn" onClick={() => finalizarCardZap(id)}>
                            <p>Zap!</p>
                        </Zap>
                    </ConteinerOpções>
                </Pergunta>
            </Conteiner2>
        );
    }

    if (quartaTela === true) {
        return (
            <Conteiner2 data-test="flashcard">
                <Pergunta>
                    <Texto data-test="flashcard-text" opcao={opcaoSelecionada}>Pergunta {id}</Texto>
                    <img data-test="no-icon" src={imagemResposta} alt="" />
                </Pergunta>
            </Conteiner2>
        );
    }

    if (quintaTela === true) {
        return (
            <Conteiner2 data-test="flashcard">
                <Pergunta>
                    <Texto data-test="flashcard-text" opcao={opcaoSelecionada}>Pergunta {id}</Texto>
                    <img data-test="partial-icon" src={imagemResposta} alt="" />
                </Pergunta>
            </Conteiner2>
        );
    }

    if (sextaTela === true) {
        return (
            <Conteiner2 data-test="flashcard">
                <Pergunta>
                    <Texto data-test="flashcard-text" opcao={opcaoSelecionada}>Pergunta {id}</Texto>
                    <img data-test="zap-icon" src={imagemResposta} alt="" />
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
        font-family: 'Recursive', sans-serif;
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
        font-family: 'Recursive', sans-serif;
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
        font-family: 'Recursive', sans-serif;
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
  @media(max-width: 768px){
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

  @media(max-width: 768px){
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
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: ${({ opcao }) =>
      opcao === 'erro'
        ? 'red'
        : opcao === 'quase'
        ? 'orange'
        : opcao === 'zap'
        ? 'green'
        : '#333333'};
    margin-left: 22px;
    align-self: flex-start;
    margin-top: 18px;
    text-decoration: ${({ opcao }) =>
      opcao ? 'line-through' : 'none'};
  `;

export default Perguntas