import { default as React, useState } from 'react';
import { useApi } from '../../services';
import { FaEdit } from 'react-icons/fa';

import './edit.scss'

const EditChild = ({kid, onClose, reload}) => {
  const { editKid } = useApi();

  const [ selectedSkintone, setSelectedSkintone ] = useState(kid.skin_color) // put skintone color here from DB, to have it checked
  const [ selectedThemeColor, setSelectedThemeColor ] = useState(kid.theme_color) // put theme color here from DB, to have it checked

  return (
    <form className="edit-child">
		<FaEdit />
		<h1>{kid.first_name + ' ' + kid.last_name} bewerken</h1>
		<p>U bewerkt een bestaande record in de database van kinderen.</p>
		<div className="edit-child__input">
			<p>Voornaam:</p>
			<input type='text' id="first_name" defaultValue={kid.first_name}></input>
		</div>
		<div className="edit-child__input">
			<p>Familienaam:</p>
			<input type='text' id="last_name" defaultValue={kid.last_name}></input>
		</div>
		<div className="edit-child__input">
			<p>Adres:</p>
			<input type='text' id="addres" defaultValue={'Wordt (nog) niet bewaard'}></input>
		</div>
		<div className="edit-child__input">
			<p>Geboortedatum:</p>
			<input type='date' id="birthdate" defaultValue={new Date(kid.birth_date).toISOString().substr(0,10)}></input>
		</div>
		<div className="edit-child__input-skintone">
			<p>Huidskleur:</p>
			<div className="edit-child__input-skintone-wrapper">
				<label>
					<input type="radio" id="skin-01" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('skin-01') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="skin-02" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('skin-02') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="skin-03" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('skin-03') ? '✗' : '' }</div>
				</label>
				<label>
					<input type="radio" id="skin-04" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
					<div className="checkmark">{ selectedSkintone === ('skin-04') ? '✗' : '' }</div>
				</label>
			</div>
		</div>
		<div className="edit-child__input-theme">
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
		<div className="edit-child__buttons">
			<p onClick={ onClose }>Annuleren</p>
			<input type="submit" value="Opslaan" onClick={(e) => {
				e.preventDefault();
				editKid(kid._id, {
					first_name: document.getElementById('first_name').value,
					last_name: document.getElementById('last_name').value,
					birth_date: new Date(document.getElementById('birthdate').value),
					theme_color: selectedThemeColor,
					skin_color: selectedSkintone,
				}).then(reload)
				.then(onClose);
			}}></input>
		</div>
    </form>
  );
};

export default EditChild;
