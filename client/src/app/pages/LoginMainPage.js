import { default as React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../services';
import { ORGANISATION_DASHBOARD, KID } from '../routes';

import { FaUserAlt, FaLock } from 'react-icons/fa';

import './LoginPage.scss'

const LoginMainPage = (props) => {
	const { getToken, checkIsLoggedIn, getLoggedInRole } = useAuth();
	const [ error, setError ] = useState();

	const [ authMode, setAuthMode ] = useState('kid');

	const submit = async (e) => {
		e.preventDefault();
		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;

		const response = await getToken(authMode, username, password);
		if (response.error) {
			setError(response.error);
		} else {
			window.location.reload();
		}
	}

	return (
		<div className="login">
			{
				(getLoggedInRole() !== '') 
				? <Redirect to={
						(getLoggedInRole() === 'organisation') ? ORGANISATION_DASHBOARD : (getLoggedInRole() === 'kid') ? KID : null
					}/> 
				: null
			}

			<form className="login__form">
				<h2>KID-OK-KIT</h2>

				<div className="login__form-credenials">
					<div className="login__form-credenials-username">
						<FaUserAlt size={25} />
						<input type="text" id="username" placeholder="Gebruikersnaam"></input>
					</div>
					<div className="login__form-credenials-password">
						<FaLock size={25} />
						<input type="password" id="password" placeholder="Wachtwoord"></input>
					</div>
					<div className="login__form-credenials-type">
						<div className="login__form-credenials-type-wrapper">
							<input type="radio" id="kid" name="authMode" value="kid" defaultChecked={true} onClick={() => setAuthMode('kid')}></input>
							<label htmlFor="kid">Kind</label><br></br>
						</div>
						<div className="login__form-credenials-type-wrapper">
							<input type="radio" id="supervisor" name="authMode" value="supervisor" onClick={() => setAuthMode('organisation')}></input>
							<label htmlFor="supervisor">Organisatie</label><br></br>
						</div>
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

export default LoginMainPage;
