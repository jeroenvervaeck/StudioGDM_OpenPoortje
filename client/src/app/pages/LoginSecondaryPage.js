import { default as React, useState } from 'react';
import { useAuth } from '../services';
import { Link, Redirect } from 'react-router-dom';
import * as Routes from '../routes';
 
import { FaUserAlt, FaLock } from 'react-icons/fa';

import './LoginPage.scss'

const LoginSecondaryPage = () => {	
	const { getToken, getLoggedInRole, getIsSupervisorLoggedIn } = useAuth();
	const [ error, setError ] = useState();

	const submit = async (e) => {
		e.preventDefault();
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;

		const response = await getToken('supervisor', username, password);
		if (response.error) {
			setError(response.error);
		} else {
			window.location.reload();
		}
	}

	return (
		<div className="login">
		{
			(getLoggedInRole() !== 'organisation') 
			? <Redirect to={Routes.LOGIN_MAIN}/> 
			: null
		}

		{
			(getIsSupervisorLoggedIn()) 
			? <Redirect to={Routes.SUPERVISOR_KID}/> 
			: null
		}

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

				<p className="login__form-btn" onClick={(e) => submit(e)}>Inloggen</p>

				{
					error
					?
						<div className="login__form-error">
							<p>{error}</p>
						</div>
					:
						undefined
				}
				
			</form>
		</div>
	);
	
};

export default LoginSecondaryPage;
