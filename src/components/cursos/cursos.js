// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

import Experience from '../experience/experience'
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';

const Cursos = () => (
  <Row>
    <Col m={10} s={12}>
        <h5>Principais cursos da instituição</h5>
        <Experience title="Biologia"
                    description=""
                    avatar={img1}
        />
        <Experience title="Física"
                    description=""
                    avatar={img2}
        />
        <Experience title="Química"
                    description=""
                    avatar={img3}
        />
        <Experience title="Matemática"
                    description=""
                    avatar={img4}
        />
        <Experience title="História"
                    description=""
                    avatar={img5}
        />
    </Col>
  </Row>
);

export default Cursos;