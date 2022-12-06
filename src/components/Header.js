import React from 'react';

import { User } from '../helpers/storage';

import './Header.css';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButtton';
import LogoutButton from './LogoutButton';

const Header = () => {
	const userInfo = User.getUser();

	return (
		<div class="header">
			<div style={{ float: 'right' }}>
				{userInfo ? (
					<LogoutButton />
				) : (
					<>
						<LoginButton />
						<RegisterButton />
					</>
				)}
			</div>
		</div>
	);
};

export default Header;