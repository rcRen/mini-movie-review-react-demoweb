import React, {useState} from 'react'
import MyCard from './UI/MyCard'
import Form from 'react-bootstrap/Form'
import MyButton from './UI/MyButton'

function LoginForm() {
    const [inputEmail, setInputEmail] = useState();
    const [inputPassword, setInputPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/login", {
            method: "POST",
            body: JSON.stringify({
                email: inputEmail,
                password: inputPassword,
            }),
            headers: {
                'Content-type': "application/json; charset=UTF-8",
            }
        })
            .then((data) => data.json())
            .then((json) => {
                (json.success? alert('Login sucessful') : alert(json.loginErr));
            });
    }

    return (
        <MyCard>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-5' controlId="formBasicEmail">
                    <Form.Control type='email' placeholder='Email'
                        value={inputEmail} onChange={(e) => { setInputEmail(e.target.value) }} />
                </Form.Group>
                <Form.Group className='mb-5' controlId="formBasicPassword">
                    <Form.Control type='password' placeholder='Password'
                        value={inputPassword} onChange={(e) => { setInputPassword(e.target.value) }} />
                </Form.Group>
                <MyButton type="submit">
                    Login
                </MyButton>
            </Form>
        </MyCard>
    )
}

export default LoginForm