import React from 'react'
import { Card, Button, Container, } from 'react-bootstrap';

const Produto = () => {
  return (
    <Container>
      <header className='produto-head'>

      </header>
      <div>
        <div className='text-center p-4'>
          <h3 className='produto-txt'>Escolha um Produto abaixo para acessar o cerc.docs:</h3>
          <div className='d-flex justify-content-center mt-2 pt-2'>
            <p className='w-50 produto-sub-txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor vel purus a scelerisque.</p>
          </div>
        </div>

        <div className='card-container justify-content-center'>
          <Card body className='produto-card'>
            <Card.Body>
              <h4 className='card-title'>Duplicata <br />Escritural</h4>
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
              <h4 className='card-title'>Imobiliário <br /><span className='invisible'>.</span></h4>
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
              <h4 className='card-title'>Arranjo de<br />Pagamento</h4>
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