import { default as React, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

import './edit.scss'

const EditChild = ({}) => {
  const [ selectedSkintone, setSelectedSkintone ] = useState('') // put skintone color here from DB, to have it checked
  const [ selectedThemeColor, setSelectedThemeColor ] = useState('') // put theme color here from DB, to have it checked

  return (
    <form className="edit-child">
		<FaEdit />
		<h1>Kind "name" bewerken</h1>
		<p>U bewerkt een bestaande record in de database van kinderen.</p>
		<div className="edit-child__input">
			<p>Voornaam:</p>
			<input type='text' defaultValue={'child_data'}></input>
		</div>
		<div className="edit-child__input">
			<p>Familienaam:</p>
			<input type='text' defaultValue={'child_data'}></input>
		</div>
		<div className="edit-child__input">
			<p>Adres:</p>
			<input type='text' defaultValue={'child_data'}></input>
		</div>
		<div className="edit-child__input">
			<p>Geboortedatum:</p>
			<input type='text' defaultValue={'child_data'}></input>
		</div>
		<div className="edit-child__input-skintone">
			<p>Huidskleur:</p>
			<div className="edit-child__input-skintone-wrapper">
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
			<p onClick={ () => console.log('make the component disapear') }>Annuleren</p>
			<input type="submit" value="Opslaan"></input>
		</div>
    </form>
  );
};

export default EditChild;
