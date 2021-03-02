import { default as React } from 'react';
import { useApi } from '../../services';
import { FaEdit } from 'react-icons/fa';

import './edit.scss'

const EditSupervisor = ({supervisor, onClose, reload}) => {
  const { editSupervisor } = useApi();

  return (
    <form className="edit-supervisor">
		<FaEdit />
		<h1>{supervisor.first_name + ' ' + supervisor.last_name} bewerken</h1>
		<p>U bewerkt een bestaande record in de database van begeleiders.</p>
		<div className="edit-supervisor__input">
			<p>Voornaam:</p>
			<input type='text' id="first_name" defaultValue={supervisor.first_name}></input>
		</div>
		<div className="edit-supervisor__input">
			<p>Familienaam:</p>
			<input type='text' id="last_name" defaultValue={supervisor.last_name}></input>
		</div>
		{/* <div className="edit-supervisor__input">
			<p>Organisatie:</p>
			<input type='text' id="organisation" defaultValue='supervisor data'></input>
		</div> */}
		<div className="edit-supervisor__buttons">
			<p onClick= { onClose }>Annuleren</p>
			<input type="submit" value="Opslaan" onClick={(e) => {
				e.preventDefault();
				editSupervisor(supervisor._id, {
					first_name: document.getElementById('first_name').value,
					last_name: document.getElementById('last_name').value,
				}).then(reload)
				.then(onClose);
			}}></input>
		</div>
    </form>
  );
};

export default EditSupervisor;
