import Logo from "./assets/logo.png"
import styled from 'styled-components'


export default function Cabecalho() {
    return (
        <Cabeçalho>
            <img src={Logo} alt="Logo" />
            <p>ZapRecall</p>
        </Cabeçalho>
    );
}

const Cabeçalho = styled.div`
  width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 72px;
    height: 80px;
  }
  p{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 76px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }
  @media(max-width: 375px){
    width: 100%;
    display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 52px;
    height: 60px;
  }
  p{
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }
  }
`
