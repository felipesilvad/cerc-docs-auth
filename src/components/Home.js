import React from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import Login from './Login';
import logo from '../imgs/LOGO_CERC.DOCS.png';
import woman_docs from '../imgs/woman_docs.png';

const Home = () => {
  return (
    <div className="App">
      <Container>
        <Row className='h-100 align-items-center mt-4'>
          <Col sm={6} className="text-light p-4">
            <div className='p-4 m-4'>
              <Image src={woman_docs} className="woman-img" />
              <div>
                <h2><b>Bem vindo ao  <br />Portal cerc.docs!</b></h2>
                <h6 className='mt-4'>O acesso a esta plataforma é restrito a usuários habilitados por agentes previamentes cadastrados e homologados pela CERC.</h6>
                <Button className='button-saber-mais'>Saber mais</Button>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <Card className='card'>
              <Image src={logo} className="p-4 logo mx-auto d-block"/>
              <div className=''>
                <h4 className='font-weight-bold'>Para acessar o conteúdo, <br />
                <b className='blue-higlight'>faça o login abaixo:</b></h4>
              </div>
              <Login />
            </Card>
          </Col>
        </Row>
      </Container> 
    </div>
  )
}

export default Home