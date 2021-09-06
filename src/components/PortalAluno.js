import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components";


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
const Text = styled.p`
    color: black;
    margin: 1%;
    width: 50%;
    line-height: 1.5;
`;
const Img = styled.img`
    width: 40%;
    height: 80%;
`;


class PortalAluno extends Component{

      
render(){
  return(
    <section>
      <GlobalStyle />
          <Body>
   
              <InsideBody>
                <TitleBody>Bem vindo ao Espaço do Aluno!</TitleBody>
                <Text>O grupo Elementos preparou um portal voltado para atores e profissionais de espetáculo de todo o Brasil. 
                Você pode navegar pelas páginas e descobrir as inúmeras vantagens e propostas artísticas que preparamos para você.
                </Text>
               
            
              </InsideBody>
            </Body>
        
    </section>
    )
  }
}

export default PortalAluno;

