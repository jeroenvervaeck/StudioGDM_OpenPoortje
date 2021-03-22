import { default as React, useState } from 'react';
import { useApi, useAuth } from '../../services'; 
import { FaRegCheckSquare } from 'react-icons/fa';

import './password.scss'

const PasswordCheck = ({role, onClose, proceed}) => {
  const { getToken } = useAuth();
  const [ error, setError ] = useState();

  return (
	<div id="background-blur">
	    <form className="pw-check">
			<FaRegCheckSquare />
			<h1>Bevestig uw wachtwoord</h1>
			<p>Let op! Voor deze actie is uw {(role === 'organisation') ? 'organisatie' : 'begeleiders' } wachtwoord nodig</p>
			<div className="pw-check__input">
				<p>Wachtwoord:</p>
				<input type='password' id="pw" defaultValue=""></input>
			</div>
			<div className="pw-check__buttons">
				<p onClick={ onClose }>Annuleren</p>
				<h1 onClick={(e) => {
					e.preventDefault();
					getToken(
						role, 
						JSON.parse(sessionStorage.getItem((role === 'organisation') ? 'user' : 'supervisor' )).auth.username, 
						document.getElementById('pw').value
					).then((response) => {
						if (response.token) {
							proceed()
						} else {
							setError('Uw wachtwoord is incorrect!')
						}
					})
				}}>Bevestig</h1>
			</div>
			{
				(error) ? <p className="pw-check__error">{error}</p> : null
			}
	    </form>
	</div>
  );
};

export default PasswordCheck;
