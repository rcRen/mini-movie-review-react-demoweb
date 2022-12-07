import React from 'react';
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
// import './UpdatePassword.css';
// import Header from '../components/Header';
import ChangePasswordForm from '../components/ChangePasswordForm';
import MyCard from '../components/UI/MyCard';

function UpdatePassword() {
	return (
		<>
			<MyCard>
				<ChangePasswordForm />
			</MyCard>
		</>
	);
}

export default UpdatePassword;
