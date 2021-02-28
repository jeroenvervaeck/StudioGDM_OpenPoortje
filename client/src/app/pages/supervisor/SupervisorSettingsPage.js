import { default as React, useState } from 'react';

import './SupervisorSettingsPage.scss'

import { Nav } from '../../components'

const SupervisorSettingsPage = () => {
	const [ selectedSkintone, setSelectedSkintone ] = useState() // put skintone color here from DB, to have it checked
	const [ selectedThemeColor, setSelectedThemeColor ] = useState() // put theme color here from DB, to have it checked

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
							<input type='text' id="first_name" defaultValue='firstname child'></input>
						</div>
						<div className="supervisor-settings__form-general-record">
							<p>Familienaam</p>
							<input type='text' id="first_name" defaultValue='firstname child'></input>
						</div>
						<div className="supervisor-settings__form-general-record">
							<p>Adress</p>
							<input type='text' id="first_name" defaultValue='firstname child'></input>
						</div>
						<div className="supervisor-settings__form-general-record">
							<p>Begeleider</p>
							<input type='text' id="first_name" defaultValue='firstname child'></input>
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
					<input className="supervisor-settings__form-save" type="submit" value="Opslaan" onClick={(e) => { console.log(e) }}></input>
				</form>

			</div>
		</div>
	);
	
};

export default SupervisorSettingsPage;
