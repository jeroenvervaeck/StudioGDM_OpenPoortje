import { default as React, useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';

import './LoginPage.scss'

const LoginPage = () => {
	const [selected, setSelected] = useState('kid')
	
	return (
		<div className="login">
			<h1>Welkom!</h1>

			<form className="login__form">
				<h2>KID-OK-KIT</h2>

				<div className="login__form-credenials">
					<div className="login__form-credenials-username">
						<FaUserAlt size={25} />
						<input type="text" placeholder="Gebruikersnaam"></input>
					</div>
					<div className="login__form-credenials-password">
						<FaLock size={25} />
						<input type="password" placeholder="Wachtwoord"></input>
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
					</div>
				</div>

				<input type="submit" value="Inloggen" className="login__form-btn"></input>
			</form>
		</div>
	);
	
};

export default LoginPage;
