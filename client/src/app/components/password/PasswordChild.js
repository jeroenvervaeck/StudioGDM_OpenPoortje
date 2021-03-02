import { default as React } from 'react';
import { useApi } from '../../services';
import { FaKey } from 'react-icons/fa';

import './password.scss'

const PasswordChild = ({kid, onClose, reload}) => {
  const { editAuthKid } = useApi();

  return (
    <form className="pw-child">
		<FaKey />
		<h1>Nieuw wachtwoord voor {kid.first_name + ' ' + kid.last_name}</h1>
		<p>U staat op het punt een nieuw wachtwoord toe te wijzen</p>
		<div className="pw-child__input">
			<p>Nieuw wachtwoord:</p>
			<input type='text' id="new_pw" defaultValue=""></input>
		</div>
		<div className="pw-child__input">
			<p>Verifieer:</p>
			<input type='text' id="verify_pw" defaultValue=""></input>
		</div>
		<div className="pw-child__buttons">
			<p onClick= { onClose }>Annuleren</p>
			<input type="submit" value="Opslaan" onClick={(e) => {
				e.preventDefault();
				editAuthKid(kid._id, {
					newPassword: document.getElementById('new_pw').value,
					confirmNewPassword: document.getElementById('verify_pw').value,
				}).then(reload)
				.then(onClose);
			}}></input>
		</div>
    </form>
  );
};

export default PasswordChild;
