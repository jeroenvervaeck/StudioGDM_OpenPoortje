import { default as React, useState } from 'react';
import { useApi } from '../../services';

import './SupervisorSettingsPage.scss'

import { Nav } from '../../components'

const SupervisorSettingsPage = () => {
	const { editKid } = useApi();

	const [ selectedSkintone, setSelectedSkintone ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')).skin_color) // put skintone color here from DB, to have it checked
	const [ selectedThemeColor, setSelectedThemeColor ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')).theme_color) // put theme color here from DB, to have it checked

	const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')));

	return (
		<div>
			<Nav />
			<div className="supervisor-settings">
				<h1>Instellingen</h1>
				<form className="supervisor-settings__form">
					<div className="supervisor-settings__form-general">
						<h2>Algemeen</h2>
						<div className="supervisor-settings__form-general-record">
							<p>Voornaam</p>
							<input type='text' id="first_name" defaultValue={kid.first_name} disabled></input>
						</div>
						<div className="supervisor-settings__form-general-record">
							<p>Familienaam</p>
							<input type='text' id="first_name" defaultValue={kid.last_name} disabled></input>
						</div>
						<div className="supervisor-settings__form-general-record">
							<p>Geboortedatum</p>
							<input type='date' id="first_name" defaultValue={kid.birth_date} disabled></input>
						</div>
					</div>
					<div className="supervisor-settings__form-personal">
						<h2>Personalisatie</h2>
						<div className="supervisor-settings__form-personal-skintone">
							<p>Huidskleur</p>
							<div className="supervisor-settings__form-personal-skintone-wrapper">
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
						<div className="supervisor-settings__form-personal-theme">
							<p>Themakleur:</p>
							<div className="supervisor-settings__form-personal-theme-wrapper">
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
					</div>
					<input className="supervisor-settings__form-save" type="submit" value="Opslaan" onClick={(e) => {
						e.preventDefault();
						editKid(kid._id, {
							theme_color: selectedThemeColor,
							skin_color: selectedSkintone,
						});
					}}></input>
				</form>

			</div>
		</div>
	);
	
};

export default SupervisorSettingsPage;
