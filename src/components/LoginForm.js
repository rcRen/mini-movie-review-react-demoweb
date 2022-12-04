import React from 'react'
import MyCard from './UI/MyCard'
import Form from 'react-bootstrap/Form'
import MyButton from './UI/MyButton'

function LoginForm() {
    return (
        <MyCard>
            <Form>
                <Form.Group className='mb-5' controlId="formBasicEmail">
                    <Form.Control type='email' placeholder='Email' />
                </Form.Group>
                <Form.Group className='mb-5' controlId="formBasicPassword">
                    <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <MyButton type="submit">
                    Login
                </MyButton>
            </Form>
        </MyCard>
    )
}

export default LoginForm