import { default as React, useState } from 'react';
import { useApi } from '../../services';  
import { FaPlus } from 'react-icons/fa';

import './add.scss'

const AddChild = ({ onClose, reload }) => {
  const { newKid, updateUserData } = useApi();

  const [ selectedSkintone, setSelectedSkintone ] = useState('')
  const [ selectedThemeColor, setSelectedThemeColor ] = useState('')

  return (
    <form className="add-child">
		<FaPlus />
		<h1>Een nieuw kind toevoegen</h1>
		<p>U voegt een nieuwe record toe aan de database van kinderen.</p>
		<div className="add-child__input">
			<p>Voornaam:</p>
			<input type='text' id="first_name" placeholder='...'></input>
		</div>
		<div className="add-child__input">
			<p>Familienaam:</p>
			<input type='text' id="last_name" placeholder='...'></input>
		</div>
		<div className="add-child__input">
			<p>Adres:</p>
			<input type='text' id="addres" placeholder='...'></input>
		</div>
		<div className="add-child__input">
			<p>Geboortedatum:</p>
			<input type='date' id="birthdate" placeholder='...'></input>
		</div>
		<div className="add-child__input-skintone">
			<p>Huidskleur:</p>
			<div className="add-child__input-skintone-wrapper">
				<label>
					<input type="radio" id="brown" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('brown') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="orange" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('orange') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="pink" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('pink') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="pale" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('pale') ? '✗' : '' }</div>
				</label>
			</div>
		</div>
		<div className="add-child__input-theme">
			<p>Themakleur:</p>
			<div className="add-child__input-theme-wrapper">
				<label>
					<input type="radio" id="color-01" name="theme-color" onClick={(e) => setSelectedThemeColor(e.target.id)}></input>
					<div className="checkmark">{ selectedThemeColor === ('color-01') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="color-02" name="theme-color" onClick={(e) => setSelectedThemeColor(e.target.id)}></input>
					<div className="checkmark">{ selectedThemeColor === ('color-02') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="color-03" name="theme-color" onClick={(e) => setSelectedThemeColor(e.target.id)}></input>
					<div className="checkmark">{ selectedThemeColor === ('color-03') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="color-04" name="theme-color" onClick={(e) => setSelectedThemeColor(e.target.id)}></input>
					<div className="checkmark">{ selectedThemeColor === ('color-04') ? '✗' : '' }</div>
				</label>
			</div>
		</div>
		<div className="add-child__buttons">
			<p onClick={ onClose }>Annuleren</p>
			<input type="submit" value="Opslaan"onClick={(e) => {
				e.preventDefault();
				newKid({
					first_name: document.getElementById('first_name').value,
					last_name: document.getElementById('last_name').value,
					birth_date: new Date(document.getElementById('birthdate').value),
					password: 'secret',
					theme_color: selectedThemeColor,
					skin_color: selectedSkintone,
					organisation_id: JSON.parse(sessionStorage.getItem('user'))._id
				}).then(reload)
				.then(onClose);
			}}></input>
		</div>
    </form>
  );
};

export default AddChild;
