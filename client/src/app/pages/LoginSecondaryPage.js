import { default as React, useState } from 'react';
import { useAuth } from '../services';
import { Link } from 'react-router-dom';
import * as Routes from '../routes';
 
import { FaUserAlt, FaLock } from 'react-icons/fa';

import './LoginPage.scss'

const LoginSecondaryPage = () => {
	const [selected, setSelected] = useState('kid')
	
	const [ authMode, setAuthMode ] = useState('kid');
	const { getToken } = useAuth();

	const submit = async (e) => {
		e.preventDefault();
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;

		const response = await getToken(authMode, username, password);
		console.log(response);
	}

	return (
		<div className="login">

			<Link className="login__nav" to={Routes.ORGANISATION_DASHBOARD}>
				<p>Beheer Open Poortje</p>
			</Link>

			<form className="login__form">
				<h2>KID-OK-KIT</h2>
				<p>Voor begeleider</p>

				<div className="login__form-credenials">
					<div className="login__form-credenials-username">
						<FaUserAlt size={25} />
						<input type="text" id="username" placeholder="Gebruikersnaam"></input>
					</div>
					<div className="login__form-credenials-password">
						<FaLock size={25} />
						<input type="password" id="password" placeholder="Wachtwoord"></input>
					</div>
				</div>

				<input type="submit" value="Inloggen" className="login__form-btn" onClick={(e) => submit(e)}></input>
			</form>
		</div>
	);
	
};

export default LoginSecondaryPage;
