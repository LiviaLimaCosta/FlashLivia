// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={10} s={12}>
        <h5 className="subtitle">Sobre a instituição</h5>
        <Card>
          <div>
            <p><b>Objetivo</b></p>
            <p>Buscamos promover uma formação atualizada dos alunos e sua capacitação para uma sociedade em mudança, por meio de um ensino de qualidade, tecnologicamente avançado e dirigido para o futuro.</p>
            <br/>
            <p><b>Missão</b></p>
            <p>Educar no contexto dos valores bíblicos para um viver pleno e para a excelência no serviço a Deus e à humanidade.</p>
          </div>
        </Card>
        <h5 className="subtitle">Mais sobre nós</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Disponibilidade em todo o país"
                    description="Por possuírmos filiais espalhadas por todo o país, atendemos uma grande demanda de alunos de todos estados do Brasil, visando ampliar as fronteiras do aprendizado."
                    avatar={company_avatar}
        />
        <Experience title="Salas de aula capacitadas"
                    description="Tendo em vista o atual cenário com o novo coronavírus, adaptamos nossas salas de aula para comportar o maior número possível de alunos de forma segura, seguindo os protocolos de segurança."
                    avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;