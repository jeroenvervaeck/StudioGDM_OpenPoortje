import { default as React, useState } from 'react';
import { useAuth } from '../services';

import { FaUserAlt, FaLock } from 'react-icons/fa';

import './LoginPage.scss'

const LoginPage = () => {
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
			<h1>Welkom!</h1>

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
						<label>
							<input type="radio" name="auth" value="kid" onClick={() => {setSelected('kid')}} />
							Kind
						</label>
						<label>
							<input type="radio" name="auth" value="organisation" onClick={() => {setSelected('organisation')}} />
							Organisatie
						</label>
						<input type="radio" id="kid" name="authMode" value="kid" defaultChecked={true} onClick={() => setAuthMode('kid')}></input>
						<label htmlFor="kid">Kind</label><br></br>
						<input type="radio" id="supervisor" name="authMode" value="supervisor" onClick={() => setAuthMode('supervisor')}></input>
						<label htmlFor="supervisor">Begeleider</label><br></br>
					</div>
				</div>

				<input type="submit" value="Inloggen" className="login__form-btn" onClick={(e) => submit(e)}></input>
			</form>
		</div>
	);
	
};

export default LoginPage;
