import { default as React, useState } from 'react';
import { useApi, useAuth } from '../../services'; 
import { FaRegCheckSquare } from 'react-icons/fa';

import './password.scss'

const PasswordCheck = ({role, onClose, proceed}) => {
  const { getToken } = useAuth();
  const [ error, setError ] = useState();

  return (
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
			<input type="submit" value="Bevestig" onClick={(e) => {
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
			}}></input>
		</div>
		{
			(error) ? <p className="pw-check__error">{error}</p> : null
		}
    </form>
  );
};

export default PasswordCheck;
