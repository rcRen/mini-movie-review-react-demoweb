import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function RegisterButton() {
	return (
		<div>
			<Link to="/identity#register">
				<Button variant="link" className='text-white'>Register</Button>
			</Link>
		</div>
	);
}
export default RegisterButton;
