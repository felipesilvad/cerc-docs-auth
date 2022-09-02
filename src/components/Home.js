import React from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import Login from './Login';
import logo from '../imgs/LOGO_CERC.DOCS.png';
import woman_docs from '../imgs/woman_docs.png';

const Home = () => {
  return (
    <div className="App">
      <Container className='d-none d-lg-block'>
        <Row className='h-100 align-items-center mt-4'>
          <Col sm={6} className="text-light p-4">
            <div className='saiba-mais-div'>
              <Image src={woman_docs} className="woman-img" />
              <div>
                <h2 className='text-center-mobile'><b>Bem vindo ao  <br />Portal cerc.docs!</b></h2>
                <h6 className='saiba-mais-txt text-center-mobile'>O acesso a esta plataforma é restrito a usuários habilitados por agentes previamentes cadastrados e homologados pela CERC.</h6>
                <div className='text-center-mobile'>
                  <Button className='button-saber-mais'>Saber mais</Button>
                </div>
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
      <Container className='d-lg-none d-xl-none'>
        <div className='saiba-mais-div'>
          <div>
            <h4 className='text-center-mobile m-4'>Bem vindo ao  <br />Portal cerc.docs!</h4>
          </div>
        </div>
        <Card className='card'>
          <Image src={logo} className="p-4 pb-2 logo mx-auto d-block"/>
          <div className='text-center'>
            <h4 className='font-weight-bold'>Para acessar o conteúdo, <br />
            <b className='blue-higlight'>faça o login abaixo:</b></h4>
          </div>
          <Login />
        </Card>
        <h6 className='saiba-mais-txt text-center-mobile'>O acesso a esta plataforma é restrito a usuários habilitados por agentes previamentes cadastrados e homologados pela CERC.</h6>
        <div className='text-center-mobile'>
          <Button className='button-saber-mais'>Saber mais</Button>
        </div>
        <h6 className='saiba-mais-txt text-center-mobile'>Mais informações, entre em contato com: info@cerc.inf.br</h6>
      </Container> 
    </div>
  )
}

export default Home