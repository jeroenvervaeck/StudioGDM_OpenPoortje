import { default as React } from 'react';
import { useApi } from '../../services';
import { FaKey } from 'react-icons/fa';

import './password.scss'

const PasswordSupervisor = ({supervisor, onClose, reload}) => {
  const { editAuthSupervisor } = useApi();

  return (
    <form className="pw-supervisor">
		<FaKey />
		<h1>Nieuw wachtwoord voor 'name'</h1>
		<p>U staat op het punt een nieuw wachtwoord te te wijzen</p>
		<div className="pw-supervisor__input">
			<p>Nieuw wachtwoord:</p>
			<input type='password' id="new_pw" defaultValue=""></input>
		</div>
		<div className="pw-supervisor__input">
			<p>Verifieer:</p>
			<input type='password' id="verify_pw" defaultValue=""></input>
		</div>
		<div className="pw-supervisor__buttons">
			<p onClick= { onClose }>Annuleren</p>
			<input type="submit" value="Opslaan" onClick={(e) => {
				e.preventDefault();
				editAuthSupervisor(supervisor._id, {
					newPassword: document.getElementById('new_pw').value,
					confirmNewPassword: document.getElementById('verify_pw').value,
				}).then(reload)
				.then(onClose);
			}}></input>
		</div>
    </form>
  );
};

export default PasswordSupervisor;
