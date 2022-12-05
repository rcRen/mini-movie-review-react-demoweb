import React from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import MyCard from '../components/UI/MyCard'
import './RegisterLoginPage.css'



function RegisterLoginPage() {
  return (
    <Container>
      <Row>
        <Col xs={4} sm={4} md={4} lg={4} >
          <img src={require('../images/monvie-white-logo.png')} style={{ width: 75, height: 'auto' }} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}  className="mt-5 p-5">
          <img src={require('../images/loginimage.png')} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <MyCard style = {{height:'550px'}}>
            <Tabs
              defaultActiveKey="login"
              id="justify-tab-example"
              className="mx-3 mb-3"
              justify>
              <Tab eventKey="login" title="Login">
                <LoginForm />
              </Tab>
              <Tab eventKey="register" title="Register">
                <RegisterForm />
              </Tab>
            </Tabs>
          </MyCard>
        </Col>
      </Row>
      <Row className='fixed-bottom text-center' >
      <Col xs={12} sm={12} md={12} lg={12} >
        <span style={{color:'#ffffff'}}>&copy; 2022 Group BK </span>
        <img src={require('../images/monvie-sm-logo.png')} style={{width: 45, height: 'auto' }} />
        </Col>
      </Row>

    </Container >

  )
}

export default RegisterLoginPage