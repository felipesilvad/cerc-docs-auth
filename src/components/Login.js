import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import { Buffer } from 'buffer';


const Login = () => {
  window.Buffer = Buffer;
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [token, setToken] = useState()
  const axios = require('axios');
  const basic = require('basic-authorization-header');

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      axios.post('https://cad-stg.cerc.inf.br/v1/auth/users/companies', {"accessCode":null},{
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': basic(email, password),
      }})
      .then(function (result) {
        console.log(result.request.response.split('finalReceivingUser')[1].substring(3, 17));
        const sendedDoc = result.request.response.split('finalReceivingUser')[1].substring(3, 17);
        axios.post('https://cad-stg.cerc.inf.br/v1/auth/token', {
            "accessCode":null,"companyDocument":sendedDoc
          },{headers: {
            'Content-Type': 'application/json',
            'authorization': basic(email, password),
          }})
          .then(function (result) {
            console.log(result.request.response);
            setToken(result.request.response)
            window.open("https://cerc-2.gitbook.io/cerc-docs-sacador/ZYMORO4tSIVO0yh1ZwAQ/");
        })
      })
    }catch (e) {
      console.log(e.message)
    }
  }

  return (
    <Form className='mt-4-none-xs' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-muted">Login</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="e-mail ou CPF" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-muted">Senha</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="digite a senha" />
      </Form.Group>
      <div className='d-lg-none d-xl-none'>
        <h6 className='esqueci-senha blue-higlight'>Esqueci minha senha</h6>
      </div>
      <Button className='button' variant="primary" type="submit">
        Entrar
      </Button>
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