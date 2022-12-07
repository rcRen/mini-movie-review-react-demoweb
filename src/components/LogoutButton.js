import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LogoutButton() {
	return (
		<div>
			<Link to="/identity#logout">
				<Button variant="warning">Logout</Button>
			</Link>
		</div>
	);
}
export default LogoutButton;
