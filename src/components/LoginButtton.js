import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LoginButtton() {
	return (
		<Link to="/identity#login">
			<Button variant="primary">
				Login
			</Button>
		</Link>
	);
}

export default LoginButtton;
