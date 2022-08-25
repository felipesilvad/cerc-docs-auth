import React from 'react'
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Form className='mt-4'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Login</Form.Label>
        <Form.Control type="email" placeholder="e-mail ou CPF" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-muted">Senha</Form.Label>
        <Form.Control type="password" placeholder="digite a senha" />
      </Form.Group>
      <Button href='https://cerc-docs.gitbook.io/cerc-docs-sacador/ZYMORO4tSIVO0yh1ZwAQ/'className='button' variant="primary" type="submit">
        Entrar
      </Button>
      <Form.Text className="text-muted">
        Mais informações, entre em contato com: <b className='blue-higlight'>info@cerc.inf.br</b>
      </Form.Text>
    </Form>
  )
}

export default Login