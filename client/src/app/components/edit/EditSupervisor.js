import { default as React } from 'react';
import { FaEdit } from 'react-icons/fa';

import './edit.scss'

const EditSupervisor = ({supervisor, onclose, reload}) => {
  return (
    <form className="edit-supervisor">
		<FaEdit />
		<h1>Begeleider "name" bewerken</h1>
		<p>U bewerkt een bestaande record in de database van begeleiders.</p>
		<div className="edit-supervisor__input">
			<p>Voornaam:</p>
			<input type='text' defaultValue='supervisor data'></input>
		</div>
		<div className="edit-supervisor__input">
			<p>Familienaam:</p>
			<input type='text' defaultValue='supervisor data'></input>
		</div>
		<div className="edit-supervisor__input">
			<p>Organisatie:</p>
			<input type='text' defaultValue='supervisor data'></input>
		</div>
		<div className="edit-supervisor__buttons">
			<p onClick= { () => console.log('make the component disapear') }>Annuleren</p>
			<input type="submit" value="Opslaan" ></input>
		</div>
    </form>
  );
};

export default EditSupervisor;
