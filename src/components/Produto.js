import React from 'react'
import { Card, Button, Container,Image } from 'react-bootstrap';
import logo from '../imgs/LOGO_CERC.DOCS.png';
import arranjo_de_pagamento from '../imgs/credit-card.png';
import imobiliario from '../imgs/imobiliario.png';
import duplicata_escritural from '../imgs/duplicata_escritural.png';

const Produto = () => {
  return (
    <Container>
      <header className='produto-head'>
        <Image src={logo} className="p-4 logo-head d-block"/>
      </header>
      <div class="produto">
        <div className='text-center p-4'>
          <h3 className='produto-txt'>Escolha um produto abaixo para acessar o cerc.docs:</h3>
          <div className='d-flex justify-content-center mt-2 pt-2'>
            <p className='produto-sub-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor vel purus a scelerisque.</p>
          </div>
        </div>

        <div className='card-container justify-content-center'>
          <Card body className='produto-card'>
            <Card.Body>
              <div className='d-flex justify-content-center'>
                <Image className='produto-icon' src={duplicata_escritural} />
                <h4 className='card-title'>Duplicata <br />Escritural</h4>
              </div>
              <ul className='card-ul'>
                <li>Cras justo odio</li>
                <li>Dapibus ac facilisis in</li>
                <li>Morbi leo risus</li>
                <li>Porta ac consectetur ac</li>
                <li>Vestibulum at eros</li>
              </ul>
              <div className=' text-center'>
                <Button 
                href="https://cerc-2.gitbook.io/cerc-docs-sacador/ZYMORO4tSIVO0yh1ZwAQ/" 
                className='button-2'>Acessar</Button>
              </div>
            </Card.Body>
          </Card>
          <Card body className='produto-card'>
            <Card.Body>
              <div className='d-flex justify-content-center'>
                <Image className='produto-icon' src={imobiliario} />
                <h4 className='card-title mt-1 mb-4'>Imobiliário</h4>
              </div>
              <ul className='card-ul'>
                <li>Cras justo odio</li>
                <li>Dapibus ac facilisis in</li>
                <li>Morbi leo risus</li>
                <li>Porta ac consectetur ac</li>
                <li>Vestibulum at eros</li>
              </ul>
              <div className=' text-center'>
                <Button href="https://cerc-2.gitbook.io/cerc-docs-sacador/ZYMORO4tSIVO0yh1ZwAQ/" className='button-2'>Acessar</Button>
              </div>
            </Card.Body>
          </Card>
          <Card body className='produto-card'>
            <Card.Body>
              <div className='d-flex justify-content-center'>
                <Image className='produto-icon' src={arranjo_de_pagamento} />
                <h4 className='card-title'>Arranjo de<br />Pagamento</h4>
              </div>
              <ul className='card-ul'>
                <li>Cras justo odio</li>
                <li>Dapibus ac facilisis in</li>
                <li>Morbi leo risus</li>
                <li>Porta ac consectetur ac</li>
                <li>Vestibulum at eros</li>
              </ul>
              <div className=' text-center'>
                <Button href="https://cerc-2.gitbook.io/cerc-docs-sacador/ZYMORO4tSIVO0yh1ZwAQ/" className='button-2'>Acessar</Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default Produto