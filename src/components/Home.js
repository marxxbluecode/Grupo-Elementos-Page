import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import corujas from "./images/Cópia de placas.png";


const GlobalStyle = createGlobalStyle`
  * {
    margi: 0;
    padding; 0;
    box-sizing: border-box;
    color: #ffff;
  }
`;
const Body = styled.div`
    display: flex;
    flex-wrap; wrap;
    width: 100vw;
    height: 100vh;
    background-color: #ffff;
`;
const InsideBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
    background: white;
    margin: 2rem; 
`;
const TitleBody = styled.h2`
      Font-size: 2.7rem;
      color: black;
      margin-top: 2rem;
      margin-bottom: 1rem;
`;
const Copyright = styled.p`
    font-size:1 rem;
    font-family:  ;
    color: #28313c;
`;
const Text = styled.p`
    color: black;
    margin: 1%;
    line-height:1.5;
`;
const Img = styled.img`
    width: 40%;
    height: 80%;
`;
const Form = styled.div`
    border: 
`;
export default function App() {
    return(
        <div>
            <GlobalStyle />
             <Body>
               
                 <Img src={corujas} alt="corujas"/>
               
              <InsideBody>
                <TitleBody>Bem vindo ao Espaço Cliente!</TitleBody>
                <Text>Conheça o espaço do cliente com portais exclusivos criados especialmente pra você.<br/>
                Prestamos 06 portais exclusivos para você!<br/> Navegue pelo espaço do cliente e descubra as diversas maneiras de ser Elementos!
                </Text>
                <form>
                    <input/>
                </form>
              <Copyright>Elementos Produções&copy;</Copyright>
              </InsideBody>
            </Body>
        </div>
    )
}

