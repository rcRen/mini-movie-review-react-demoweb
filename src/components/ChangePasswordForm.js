import React, {useState, useContext} from 'react'
import {LoggedInContext} from "../App";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


function ChangePasswordForm() {
    const [inputOldPassword, setInputOldPassword] = useState();
    const [inputNewPassword, setInputNewPassword] = useState();
    const [inputComfirmPassword, setInputComfirmPassword] = useState();
    const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInContext);

    const handleSubmit = (e) => {
        // e.preventDefault();
        // fetch("http://localhost:3001/login", {
        //     method: "POST",
        //     body: JSON.stringify({
        //         email: inputEmail,
        //         password: inputPassword,
        //     }),
        //     headers: {
        //         'Content-type': "application/json; charset=UTF-8",
        //     }
        // })
        //     .then((data) => data.json())
        //     .then((json) => {
        //         (json.success ? alert('Login sucessful') : alert(json.loginErr));
        //     });
        //     json.success ? setIsLoggedIn(true): setIsLoggedIn(false);

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div style={{paddingBottom:"150px"}}>
                    <Form.Group className='mx-3 mb-5' controlId="formBasicPassword">
                        <Form.Control type='password' placeholder='Password'
                            value={inputOldPassword} onChange={(e) => { setInputOldPassword(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className='mx-3 mb-5' controlId="formBasicPassword">
                        <Form.Control type='password' placeholder='Password'
                            value={inputNewPassword} onChange={(e) => { setInputNewPassword(e.target.value) }} />
                    </Form.Group>
                    <Form.Group className='mx-3 mb-5' controlId="formBasicPassword">
                        <Form.Control type='password' placeholder='Password'
                            value={inputComfirmPassword} onChange={(e) => { setInputComfirmPassword(e.target.value) }} />
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

export default ChangePasswordForm