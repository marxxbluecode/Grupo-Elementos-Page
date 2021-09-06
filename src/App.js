import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import PortalAtor from "./components/PortalAtor";
import PortalEducador from "./components/PortalEducador";
import PortalSocial from "./components/PortalSocial";
import PortalAluno from "./components/PortalAluno";
import PortalEmpreendedor from "./components/PortalEmpreendedor";
import PortalColab from "./components/PortalColab";
import Home from "./components/Home";
import styled from "styled-components";
import logo from "./components/images/GrupoLogo.png";
import lupa from "./components/images/lupa.png";
import candara from "./components/Fonts/Candara.ttf";
import capa from "./components/images/Capa site.png";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding; 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  @font-face {
    font-family: 'Candara';
    src: url(${candara});
 }
`;
const HeaderBody = styled.div`
    width: 100vw;
    height: 10px;
    margint-top: 0;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f3f3;
`;
const BoxIcon = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content:space-between;
`;
const Ul = styled.ul`
    display: flex;
`;
const Li = styled.li`
   list-style: none;
a {
      margin: 0.5rem;
      text-decoration: none;
      font-size: 1rem;
      color: white;
      &:hover {
          opacity: 85%;
          cursor: pointer;
      }
    }
`; 
const Paragraph = styled.li`
    list-style: none;
    font-weight: bold;
    a {
      margin: 0.5rem;
      text-decoration: none;
      font-size: 1rem;
      color: #6715fd;
      &:hover {
          opacity: 85%;
          cursor: pointer;
      }
    }
`;
const BoxBar = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
`;
const Icon = styled.img`
    width: 5%;
`;
const SearchBar = styled.input`
    width: 12%;
    height: 1px;
    border-radius: 20%/90%;
    outline: none;
    padding: 1rem;
    background: url(${lupa});
    background-color: white;
    border: 0.1px;
`;
const Btn = styled.button`
    width: 25%;
    height: 30px;
    background-color:#363537;
    border-radius: 20%/60%;
    border: 0.1px;
    -webkit-box-shadow: 10px 10px 6px -7px rgba(184,184,184,0.51);
    -moz-box-shadow: 10px 10px 6px -7px rgba(184,184,184,0.51);
    box-shadow: 10px 10px 6px -7px rgba(184,184,184,0.51);
`;
const HeaderBottom = styled.div`
    width: 100vw;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #89181A;
`;
const Div = styled.div`
    width:9%;
`;
const Portal = styled.p`
    color:#000000; 
    font-size: 16px;
    padding:1px; 
    font-weight:bold;
    text-align:center;   
    border-right: 1px ridge #dddddd;
    margin: 5px;
    &:hover {
      opacity: 80%;
      cursor: pointer;
  }
`;
const Portal1 = styled.p`
    color:#000000;
    font-size: 16px;
    padding:1px;
    font-weight:bold;
    text-align:center;
    border-right: 1px ridge #dddddd;
    margin: 5px;
    &:hover {
      opacity: 80%;
      cursor: pointer;
  }
`;
const Portal2 = styled.p`
    color:#000000;
    font-weight:bold;
    font-size: 16px;
    padding:1px;
    text-align:center;
    border-right: 1px ridge #dddddd;
    margin: 5px;
    &:hover {
      opacity: 80%;
      cursor: pointer;
  }
`;
const Portal3 = styled.p`
    color:#000000;
    font-weight:bold;
    font-size: 16px;
    padding:1px;
    text-align:center;    
    border-right: 1px ridge #dddddd;
    margin: 5px;
    &:hover {
      opacity: 80%;
      cursor: pointer;
  }
`;
const Portal4 = styled.p`
    color:#000000;
    font-weight:bold;
    font-size: 16px;
    padding:1px;
    text-align:center;
    border-right: 1px ridge #dddddd;
    margin: 5px;
    &:hover {
      opacity: 80%;
      cursor: pointer;
  }
`;
const Portal5 = styled.p`
    color:#000000;
    font-weight:bold;
    font-size: 16px;
    padding:1px;
    text-align:center;
    border-right: 1px ridge #dddddd;
    margin: 5px;
    &:hover {
      opacity: 80%;
      cursor: pointer;
  }
`;
const HeaderCapa = styled.div`
    display:flex;
`;
const Img = styled.img`
    width: 100%;
`;
const P = styled.p`
    font-weight:bolder;
    font-size: 140%;
`;


export default function App() {
        return(
            <Router>
              < GlobalStyle/>
              <HeaderCapa>
                <Img src={capa} alt="capa"/>
              </HeaderCapa>
            <HeaderBody>
                <BoxIcon>
                <Icon src={logo} alt="icon"/>
                <nav>
                <Ul>
                <Li> 
                  <Link to="/"><Portal>Espaço Cliente</Portal></Link>
                </Li>
                <Li> 
                  <Link to="/ator"><Portal>Portal do Ator</Portal></Link>
                </Li>
                <Li> 
                  <Link to="/educador"><Portal1>Portal do Educador</Portal1></Link>
                </Li>
                <Li> 
                  <Link to="/empreendedor"><Portal2>Portal do Empreendedor</Portal2></Link>
                </Li>
                <Li> 
                  <Link to="/aluno"><Portal3>Portal do Aluno</Portal3></Link>     
                </Li>
                <Li> 
                  <Link to="/colaborador"><Portal4>Portal do Colaborador</Portal4></Link>
                </Li>
                <Li> 
                  <Link to="/social"><Portal5>Diário Social</Portal5></Link>
                </Li>
                </Ul>
                </nav>
                </BoxIcon>
                <BoxBar>
                  <Paragraph>
                  <Link to="/cadastro">Seja elementos</Link>
                  </Paragraph>
                <Btn><Li><Link to="/login">Login</Link></Li></Btn>
                <Btn><Li><Link to="/cadastro">Cadastro</Link></Li></Btn>
                </BoxBar>
            </HeaderBody>
            <HeaderBottom>
                <Div></Div>
                <div>
                <Li> 
                  <Link to="/"><P><strong>Espaço Cliente</strong></P></Link>
                </Li>
                </div>
                <SearchBar type="text" id="searchbar" placeholder="Buscar"/>
            </HeaderBottom>


            <Switch>
            <Route exact path="/ator">
                <PortalAtor />
              </Route>

              <Route exact path="/educador">
                <PortalEducador />
              </Route>

              <Route exact path="/empreendedor">
                <PortalEmpreendedor />
              </Route>

              <Route exact path="/aluno">
                <PortalAluno />
              </Route>

              <Route exact path="/colaborador">
                <PortalColab />
              </Route>

              <Route exact path="/social">
                <PortalSocial />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            </Router>
        )
    }
   

