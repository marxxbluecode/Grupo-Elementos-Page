import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import corujas from "./images/Cópia de placas.png";
import ator from "./images/PortalAtor.jpeg";
import educador from "./images/PortalEducador.jpeg";
import empreendedor from "./images/PortalEmpreendedor.jpeg";
import social from "./images/PortalSocial.jpeg";
import aluno from "./images/PortalAluno.jpeg";
import colaborador from "./images/PortalColaborador.jpeg";


const GlobalStyle = createGlobalStyle`
  * {
    margi: 0;
    padding; 0;
    box-sizing: border-box;
    color: #ffff;
  }
`;
const Body = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 100vw;
    background-color: #ffff;
`;
const InsideBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 20%;
    background: white;
    margin: 2rem; 
`;
const OutsideBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
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
const Title = styled.h3`
    color: black;
    font-weight:bold;
    text-align: center;
`;
const Titlehidden = styled.h3`
    color: transparent;
    font-weight:bold;
`;
const Text = styled.p`
    color: black;
    margin: 1%;
    line-height:1.5;
    font-size: 1.1rem;
`;
const Text1 = styled.p`
    color: black;
    margin-top: 10%;
    margin-left: 5%;
    line-height:1.5;
    font-size: 0.9rem;
`;
const Img = styled.img`
    width: 120%;
    height: 80%;
    margin-bottom: 70%;
`;
const Img1 = styled.img`
    width: 100%;
    margin-bottom: 30%;
`;
const Img2 = styled.img`
    width: 100%;
    margin-bottom: 50%;
`;
const Img3 = styled.img`
    width: 100%;
    margin-bottom: 40%;
`;
const Img4 = styled.img`
    width: 100%;
    margin-bottom: 20%;
`;
const Img5 = styled.img`
    width: 100%;
    margin-bottom: 20%;
`;
const Img6 = styled.img`
    
`;
const Cad = styled.h3`
    color: black;
    font-weight:bold;
    text-align: center;
    margin-left: 8rem;
`;

const Cadastro = styled.div`
    display:flex;
    width: 51%;
    justify-content:space-evenly;
    background-color:#08B8E0;
    border: dashed black;
`;
const Cadastro2 = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#08B8E0;
    justify-content:;
    height: 300px;
    border: dashed black;
`;
const Btn = styled.button`
    margin:1rem;
    width: 120px;
    height: 25px;
    background-color: #195C9F;
    border: none;
    border-radius:;
`;
const Caixa = styled.div`
    display:flex;
    width:100%;
    justify-content: space-evenly;
    align-items: center;
`;
const PortalBox = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin: 5%;
`;
const CaixaBtn = styled.div`
    margin-top: 1.7rem;
`;
const InsideLogin = styled.div`
   margin-top: 2rem;
`;
const TextBox = styled.div`
  margin: 2%;
`;
export default function App() {
    return(
        <div>
            <GlobalStyle />
             <Body>
               <OutsideBody>
                 <Img src={corujas} alt="corujas"/>
                 <Img1 src={ator} alt="logo"/>
                 <Img2 src={educador} alt="logo"/>
                 <Img3 src={empreendedor} alt="logo"/>
                 <Img4 src={social} alt="logo"/>
                 <Img5 src={aluno} alt="logo"/>
                 <Img6 src={colaborador} alt="logo"/>
               </OutsideBody>
                 
               
              <InsideBody>
                <TitleBody>Bem vindo ao Espaço Cliente!</TitleBody>
                <Text>“Sejam bem vindos ao Espaço do cliente. Se você
                       chegou até aqui de alguma forma já estamos conectados
                       e juntos temos todos os Elementos. ”    
                </Text>
                <Text>
                      Pensando em uma comunicação mais assertiva e em 
                      conteúdo de qualidade para todos os nossos clientes 
                      o grupo Elementos preparou seis portais interativos 
                      com ferramentas e diversas possibilidades de interações 
                      e conteúdo de acordo com os interesses de nossos parceiros
                      e colaboradores. 
                </Text>
                <Text>
                    Aqui você vai perceber que existem diversas
                    formas de ser Elementos e vamos apresentar ela para você.
                </Text>
                <Text>
                    O primeiro passo é realizar o seu cadastro geral dentro do nosso
                    sistema e a partir desse momento você poderá conhecer e 
                    explorar tudo que preparamos para vocês.
                </Text>
                    <Text><strong>Faça seu cadastro aqui</strong></Text>
            <Caixa>
            <Cadastro>
                <div>
                <Cad>Cadastro</Cad>
                        <div>
                            <Text>Nome:</Text>
                            <input type="text" name="nome" required/>
                        </div>
                        <div>
                            <Text>E-mail:</Text>
                            <input type="email" name="data" required/>
                        </div>
                        <div>
                            <Text>Celular:</Text>
                            <input type="tel" name="tel" required/>
                        </div>
                        <div>
                            <Text>CPF:</Text>
                            <input type="number" nome="cpf" required/>
                        </div>
                        <div>
                            <Text>Data de Nascimento:</Text>
                            <input type="date" name="data" required/>
                        </div>
                </div>
                <div>
                <Titlehidden>C</Titlehidden>
                        <div>
                            <Text>Perfil:</Text>
                            <input type="text" name="perfil" required/>
                        </div>
                        <div>
                            <Text>Cidade:</Text>
                            <input type="text" name="city" required/>
                        </div>
                        <div>
                            <Text>Estado:</Text>
                            <select>
                                <option selected disable value="">Selecione</option>
                                <option>Acre</option>
                                <option>Alagoas</option>
                                <option>Amapá</option>
                                <option>Amazonas</option>
                                <option>Bahia</option>
                                <option>Ceará</option>
                                <option>Espírito Santo</option>
                                <option>Goiás</option>
                                <option>Maranhão</option>
                                <option>Mato Grosso</option>
                                <option>Mato Grosso do Sul</option>
                                <option>Minas Gerais</option>
                                <option>Pará</option>
                                <option>Paraíba</option>
                                <option>Paraná</option>
                                <option>Pernambuco</option>
                                <option>Piauí</option>
                                <option>Rio de Janeiro</option>
                                <option>Rio Grande do Norte</option>
                                <option>Rio Grande do Sul</option>
                                <option>Rondônia</option>
                                <option>Roraima</option>
                                <option>Santa Catarina</option>
                                <option>São Paulo</option>
                                <option>Sergipe</option>
                                <option>Tocantins</option>
                                <option>Distrito Federal</option>
                            </select>
                        </div>
                        <div>
                            <Text>Senha:</Text>
                            <input type="password" name="senha" required/>
                        </div>
                        <div>
                            <Btn>Enviar</Btn>
                        </div>
                </div>
            </Cadastro> 
            <Cadastro2>
               <Title>Login</Title>
               
                        <InsideLogin>
                            <Text>E-mail:</Text>
                            <input type="email" name="data" required/>

                            <Text>Senha:</Text>
                            <input type="password" name="senha" required/>
                            <Text1>Esqueci minha senha</Text1>
                        </InsideLogin>
                        <CaixaBtn>
                            <Btn>Entrar</Btn>
                        </CaixaBtn>
               
            </Cadastro2>
            </Caixa>
            <PortalBox>
               
                <TextBox>
                <Title>Portal do Ator</Title>
                <Text>
                O portal do ator foi criado para atores, produtores de elenco, agentes e agencias, espaços culturais, cursos teatrais, artísticas e técnicos do espetáculo de todo o Brasil.   
                Clique na setinha e saiba tudo que você pode encontrar nesse portal.
                “Aqui você vai encontrar notícias, matérias e os bastidores do que tem de melhor no cenário Artístico Brasileiro. Além de consultar a vitrine com o material artístico dos atores em destaque.  Preparamos um acervo para que os usuários possam fazerem download e upload de figurinos, adereços de cena, roteiros e equipamentos. 
                Os produtores de elenco poderão realizar busca de atores e fazer publicação de testes.
                Nosso portal conta com buscadores que serão selecionados por filtros de Busca de testes, Busca de agencias, e busca de cursos. As agencias poderão realizar o atendimento artístico assim como os cursos poderão propor descontos de suas demandas.
                O Nosso portal também pensou nos grupos teatrais que poderão TextBoxulgar as suas agendas, criar lista amiga e fazer doação de ingressos, além de interagirem diretamente com os espaços culturais que poderão pesquisar por espetáculos, receber projetos, e publicar a disponibilidade de pautas. ”
                Conheça também sobre o programa S.O.S Cia e o projeto Atores conectados e saibam quais são as outras interações que vão acontecer por aqui.
                </Text>
                </TextBox>

                <TextBox>
                <Title>Portal do Educador</Title>
                <Text>
                O portal do Educador foi criado para Instituições escolares e educadores de uma forma geral de tudo o Brasil.
                Clique na setinha e saiba tudo que você pode encontrar nesse portal.
                “ Aqui você vai encontrar dicas de leitura, Dicas de filmes, e acompanhar as inovações pedagógicas com notícias e destaques do que tem de melhor e inovador no cenário educacional. As instituições de ensino de todo o Brasil poderão se inscrever e concorrer ao prêmio de inovação Pedagógica cadastrando seu projeto em nosso portal.
                Tudo foi pensado para facilitar e auxiliar o dia a dia dos educadores e contribuir para a Educação continuada de nosso país.  O portal também terá um espaço que chamamos de plano de aula onde os professores poderão realizar downloads de PDF com conteúdo e ideias dos principais temas abordados pela BNCC. Aqui você poderá fazer o download de ideias para murais, lembrancinhas, recursos didáticos, moldes e modelos para suas aulas ficarem ainda mais incríveis. O portal contará com espaços democrático para discursão e troca de saberes sobre a Educação inclusiva e Políticas públicas, tudo pensando na educação continuada, com vantagens e estratégias de aperfeiçoamento da carreira docente. Reunimos todos os Elementos em um único portal, tudo foi pensado com muito carinho para atender as diversas necessidades do mundo educacional. Os professores de todo o Brasil também terão acesso a roda de conversas, Apoio pedagógico e evento para professores e debater e acompanhar as tendências no nosso fórum Educação.
                Conheça também sobre as nossas Atividades Pedagógicas e o projeto Professores conectados e saibam quais são as outras interações que vão acontecer por aqui.
                </Text>
                </TextBox>

                <TextBox>
                <Title>Portal do Empreendedor</Title>
                <Text>
                O portal do empreendor foi criado para Gestores, empresários e estudantes que buscam capacitação e desenvolvimento intelectual e tendências do mercado de trabalho. 
                Clique na setinha e saiba tudo que você pode encontrar nesse portal.
                “ Aqui você vai encontrar Teatro para sipat, intervenções teatrais, coofee break e dicas empreendedoras. Um espaço perfeito para o networking de empresas e profissionais interagirem por meio de Publicação de estágios, Publicação de vagas de emprego, Publicação de eventos, Publicação de serviços. Profissionais de todo Brasil poderão criar o seu perfil em nosso portal e realizar candidatura de estágios, candidatura de vagas, criação de currículo e portfólio, e integrar com as empresas por meio de envio de propostas e consulta de fornecedores. Preparamos um ambiente totalmente atrativo e estruturado para que favoreça o dia a dia de empresas e profissionais na criação de seus planejamentos estratégicos e execução de seus planos operacionais. Apresentando também as melhores soluções para o seu negócio com matérias sobre planejamento, Gestão de negócios, CRM, funil de vendas, ferramentas de prospecção, relatório financeiro, controle de estoque, e planilhas dinâmicas.  Você também poderá consultar as empresas que estão cadastradas em nosso portal pesquisando por segmentos aumentando o seu funil de vendas criando leads para melhor performance do seu time de inteligência comercia. Nossa equipe também vai selecionar as melhores feiras e congressos.
                Conheça também sobre o nosso caderno Corporativo e o projeto Pontos de conexão e saibam quais são as outras interações que vão acontecer por aqui.
                </Text>
                </TextBox>

                <TextBox>
                <Title>Portal Social</Title>
                <Text>
                O portal social foi criado para ONGs, instituições filantrópicas e voluntários que desejam acompanhar programas e projetos sociais com objetivo de contribuir para uma sociedade melhor em todo o território Nacional. 
                Clique na setinha e saiba tudo que você pode encontrar nesse portal.
                “ Aqui você vai encontrar uma plataforma que conecta de forma gratuita pessoas às oportunidades de voluntariado em causas sociais. As ongs de todo o Brasil poderão identificar demandas sociais, fazer publicação de vagas voluntárias, promover e participar de treinamentos de voluntariado.  Os voluntariados terão acesso ao portal social para buscar por vagas voluntarias.
                Nosso portal também contará com programas e projetos sociais desenvolvidos pela Elementos Sociais e cidadãos de todo Brasil poderão consultar o nosso calendário social, datas e informações dos acontecimentos de nossos projetos além do diário social que funcionará como uma prestação de contas à sociedade das ações que serão desenvolvidas por meio de vídeos, fotos, depoimentos, culminância de projetos, relatório de prestação de contas e próximas ações.
                Conheça também sobre o ONGs Unidas e o Arte sem fronteiras além de outros programas e projetos sociais e saibam quais são as outras interações que vão acontecer por aqui.
                </Text>
                </TextBox>

                <TextBox>
                <Title>Portal do Aluno</Title>
                <Text>
                O portal do Aluno foi criado para todos os estudantes que fazem parte dos nossos cursos e oficinas seja no presencial ou online. 
                Clique na setinha e saiba tudo que você pode encontrar nesse portal.
                “ Aqui você vai encontrar cursos e oficinas presenciais e online da Elementos escola e ter acesso a conteúdo e ferramentas exclusivas para os nossos alunos. Podendo consultar o nosso calendário e eventos. Por meio do portal do aluno você poderá realizar a sua inscrição na sala de matrículas e acompanhar as suas aulas na sala virtual. E tem mais, nossa plataforma conta com apostilas e materiais personalizados que podem facilmente serem encontrados na nossa biblioteca. Além de um espaço para avaliações, consulta de histórico e financeiro.  E um fórum de integração onde nossos alunos poderão interagir com os demais estudantes realizando troca de saberes e experiências.
                Conheça também sobre o nossos Cursos e Oficinas e o projeto Propostas Artísticas e saibam quais são as outras interações que vão acontecer por aqui.
                </Text>
                </TextBox>

                <TextBox>
                <Title>Portal do Colaborador</Title>
                <Text>
                O portal do colaborador foi criado para todas as pessoas que fazem parte do nosso time e trabalham junto com a gente seja como parceiros, funcionários, fornecedores e colaboradores de uma forma geral. 
                Clique na setinha e saiba tudo que você pode encontrar nesse portal.
                “ Aqui você vai encontrar todos os nossos processos e metodologias internas para que a nossa parceria se torne cada vez mais eficaz e eficiente. Você poderá conhecer os tipos de comunicação do grupo Elementos e como acontece a interação com nossos parceiros e colaboradores por meio do nosso protocolo de comunicação. Acessar os nossos pdf com releases, treinamentos, check list, relatórios e cronogramas. Tudo foi pensando estrategicamente para facilitar a sua operação e o desenvolvimento do seu capital intelectual e compreensão do planejamento estratégico. Dentro do portal do colaborador você poderá consultar calendários, SAC, FAQ, planejamentos, eventos internos, manual do fornecedor, manual de marcas. Nossos parceiros terão acesso as etapas do “Anuncie aqui” com as contrapartidas e possibilidades de anúncios, apoios e patrocínios.  E ter acesso a nossa incubadora de projetos para a realização de consultas do tipo custos, escopo, recursos humanos, aquisições, comunicação, riscos, qualidade, tempo e partes interessadas. ”
                Conheça também sobre o nossos Manual de eventos internos e o projeto Café dos líderes e saibam quais são as outras interações que vão acontecer por aqui.
                </Text>
                </TextBox>
            </PortalBox>
            
              <Copyright>Elementos Produções&copy;</Copyright>
              </InsideBody>
                 
            </Body>
        </div>
    )
}

