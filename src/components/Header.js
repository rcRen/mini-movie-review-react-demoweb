import React from 'react';
import { User } from '../helpers/LocalStorage';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButtton';
import LogoutButton from './LogoutButton';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
	const userInfo = User.getUser();
	return (
		<Navbar expand="lg" className='mx-3 my-3' >
			<Container fluid>
				<Navbar.Brand href="#"></Navbar.Brand>
				{/* <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
                <Navbar.Collapse id='navbarScroll'> */}
				<Nav
					className="me-auto my-2 my-lg-3"
					style={{ maxHeight: '100px' }}
					navbarScroll
				></Nav>
				<Form className="d-flex mx-5">
					<FormControl
						type="search"
						className="me-2"
						aria-label="search"
						style={{ marginLeft: '5%' }}
						name=""
					></FormControl>
					<Button variant="success" type="submit">
						Search
					</Button>
				</Form>
                {userInfo ? (
						<LogoutButton />
					) : (
						<>
							<LoginButton />
							<RegisterButton />
						</>
					)}
				{/* </Navbar.Collapse> */}
			</Container>
		</Navbar>
	);
}

export default Header;
