import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function RegisterButton() {
	return (
		<div>
			<Link to="/identity#register">
				<Button variant="warning">Register</Button>
			</Link>
		</div>
	);
}
export default RegisterButton;
