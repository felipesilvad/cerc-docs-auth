import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const axios = require('axios');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      axios.post('https://stgpublica.cerc.inf.br/app/portal/api/auth/users/companies', {
        'CPF': '1029381203',
      },{headers: {
        'authorization': `Basic MDE3MzAyMzcyMDc=:M2RjNDIyNjMtZjZjYy00ODM1LTg1YzEtYzJkYjUwNDhhOWFj`,
        'Access-Control-Allow-Origin': '*',
      }})
      .then(function (response) {
        console.log(response);
      })
      console.log('2')
    }catch (e) {
      console.log(e.message)
    }
  }

  return (
    <Form className='mt-4-none-xs' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Login</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="e-mail ou CPF" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-muted">Senha</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="digite a senha" />
      </Form.Group>
      <div className='d-lg-none d-xl-none'>
        <h6 className='esqueci-senha blue-higlight'>Esqueci minha senha</h6>
      </div>
      {/* <Link to="/produto"> */}
        <Button className='button' variant="primary" type="submit">
          Entrar
        </Button>
      {/* </Link> */}
      <div className='d-none d-lg-block'>
        <h6 className='esqueci-senha blue-higlight text-center'>Esqueci minha senha</h6>
      </div>
      <Form.Text className="text-muted text-center d-none d-lg-block">
        Ainda não é cilente ou precisa de mais informações? Nos contate em <b className='blue-higlight'>info@cerc.inf.br</b>
      </Form.Text>
    </Form>    
  )
}

export default Login