import { default as React } from 'react';
import { FaPlus } from 'react-icons/fa';

import './add.scss'

const AddSupervisor = ({}) => {
  return (
    <form className="add-supervisor">
		<FaPlus />
		<h1>Een nieuwe begeleider toevoegen</h1>
		<p>U voegt een nieuwe record toe aan de database van begeleiders.</p>
		<div className="add-supervisor__input">
			<p>Voornaam:</p>
			<input type='text' placeholder='...'></input>
		</div>
		<div className="add-supervisor__input">
			<p>Familienaam:</p>
			<input type='text' placeholder='...'></input>
		</div>
		<div className="add-supervisor__input">
			<p>Organisatie:</p>
			<input type='text' placeholder='...'></input>
		</div>
		<div className="add-supervisor__buttons">
			<p onClick={ () => console.log('make the component disapear') }>Annuleren</p>
			<input type="submit" value="Opslaan"></input>
		</div>
    </form>
  );
};

export default AddSupervisor;
