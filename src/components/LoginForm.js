import React, { useState, useContext, createContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import MyButton from './UI/MyButton'
import {LoggedInContext} from "../App";


function LoginForm() {
    const [inputEmail, setInputEmail] = useState();
    const [inputPassword, setInputPassword] = useState();
    // const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);
    const [user, setUser] = useState();
    const userContext = createContext

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
                (json.success ? alert('Login sucessful') : alert(json.loginErr));
                console.log(json);
                setUser(json.user);
                // json.success ? setIsLoggedIn(true): setIsLoggedIn(false);
            }
            );
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div style={{paddingBottom:"150px"}}>
                    <Form.Group className='mx-3 my-5 ' controlId="formBasicEmail">
                        <Form.Control type='email' placeholder='Email'
                            value={inputEmail} onChange={(e) => { setInputEmail(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className='mx-3 mb-5' controlId="formBasicPassword">
                        <Form.Control type='password' placeholder='Password'
                            value={inputPassword} onChange={(e) => { setInputPassword(e.target.value) }} />
                    </Form.Group>
                </div>
                <Button variant='primary' type="submit" className='mx-3' style={{width:'100px' ,float:'right'}}>Login</Button>
                {/* <MyButton type="submit" className='mx-3' style={{float:'right'}}>
                    Login
                </MyButton> */}
            </Form>
        </>
    )
}

export default LoginForm