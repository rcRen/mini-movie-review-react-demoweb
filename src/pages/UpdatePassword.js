import React from 'react';
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap';
// import './UpdatePassword.css';
// import Header from '../components/Header';
import ChangePasswordForm from '../components/ChangePasswordForm';
import MyCard from '../components/UI/MyCard';

function UpdatePassword() {
	return (
		<>
			{/* <Header /> */}
			<MyCard>
				<ChangePasswordForm />
			</MyCard>
		</>
		//     <Container className='test-border mt-3'>
		//     <Row>
		//       <Col  xs={4} sm={4} md={4} lg={3} className='test-border'>
		//         <Navbar/>
		//       </Col>
		//       <Col  xs={4} sm={4} md={4} lg={9} className='test-border'>
		//         <Row>
		//             <Col  xs={12} sm={12} md={12} lg={12} className='test-border'>
		//                 <Header/>
		//             </Col>
		//         </Row>
		//       </Col>
		//     </Row
		//   </Container>
	);
}

export default UpdatePassword;
