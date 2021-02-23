import { default as React } from 'react';
import { useApi } from '../../services';  
import { FaPlus } from 'react-icons/fa';

import './add.scss'

const AddSupervisor = ({onClose, reload, }) => {
  const { newSupervisor } = useApi();
  return (
    <form className="add-supervisor">
		<FaPlus />
		<h1>Een nieuwe begeleider toevoegen</h1>
		<p>U voegt een nieuwe record toe aan de database van begeleiders.</p>
		<div className="add-supervisor__input">
			<p>Voornaam:</p>
			<input type='text' id="first_name" placeholder='...'></input>
		</div>
		<div className="add-supervisor__input">
			<p>Familienaam:</p>
			<input type='text' id="last_name" placeholder='...'></input>
		</div>
		{/* <div className="add-supervisor__input">
			<p>Organisatie:</p>
			<input type='text' placeholder='...'></input>
		</div> */}
		<div className="add-supervisor__buttons">
			<p onClick={ onClose }>Annuleren</p>
			<input type="submit" value="Opslaan" onClick={(e) => {
				e.preventDefault();
				newSupervisor({
					first_name: document.getElementById('first_name').value,
					last_name: document.getElementById('last_name').value,
					password: 'secret',
					organisation_id: JSON.parse(sessionStorage.getItem('user'))._id
				}).then(reload)
				.then(onClose);
			}}></input>
		</div>
    </form>
  );
};

export default AddSupervisor;
