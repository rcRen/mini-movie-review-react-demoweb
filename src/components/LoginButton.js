import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function LoginButton() {
	return (
		<Link to="/identity#login">
			<Button variant="link" className='text-white'>
				Login
			</Button>
		</Link>
	);
}

export default LoginButton;
