import { default as React, useState } from 'react';
import { useApi, useAuth } from '../../services';
import * as Routes from '../../routes';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router'

import './SupervisorSettingsPage.scss'

import { Nav } from '../../components'

const SupervisorSettingsPage = () => {
	const { editKid, updateSelectedKidData } = useApi();
	const history = useHistory();

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);
	const [ selectedSkintone, setSelectedSkintone ] = useState((kidObj) ? kidObj.skin_color : '') // put skintone color here from DB, to have it checked
	const [ selectedThemeColor, setSelectedThemeColor ] = useState((kidObj) ? kidObj.theme_color : '') // put theme color here from DB, to have it checked

	const [ kid, setKid ] = useState(kidObj);

	return (
		<div>
			{
				(kidObj === null)
				? <Redirect to={'/'}/> 
				: null
			}
			<Nav />
			<div className="supervisor-settings">
				<h1>Instellingen</h1>
				<form className="supervisor-settings__form">
					<div className="supervisor-settings__form-general">
						<h2>Algemeen</h2>
						<div className="supervisor-settings__form-general-record">
							<p>Voornaam</p>
							<input type='text' id="first_name" defaultValue={(kid) ? kid.first_name: ''} disabled></input>
						</div>
						<div className="supervisor-settings__form-general-record">
							<p>Familienaam</p>
							<input type='text' id="first_name" defaultValue={(kid) ? kid.last_name : ''} disabled></input>
						</div>
						<div className="supervisor-settings__form-general-record">
							<p>Geboortedatum</p>
							<input type='date' id="first_name" defaultValue={(kid) ? new Date(kid.birth_date): ''} disabled></input>
						</div>
					</div>
					<div className="supervisor-settings__form-personal">
						<h2>Personalisatie</h2>
						<div className="supervisor-settings__form-personal-skintone">
							<p>Huidskleur</p>
							<div className="supervisor-settings__form-personal-skintone-wrapper">
								<label>
									<input type="radio" id="brown" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
									<div className="checkmark">{ selectedSkintone === ('skin-01') ? '✗' : '' }</div>
								</label>
								<label>
									<input type="radio" id="orange" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
									<div className="checkmark">{ selectedSkintone === ('skin-02') ? '✗' : '' }</div>
								</label>
								<label>
									<input type="radio" id="pink" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
									<div className="checkmark">{ selectedSkintone === ('skin-03') ? '✗' : '' }</div>
								</label>
								<label>
									<input type="radio" id="pale" name="skintone" onClick={(e) => setSelectedSkintone(e.target.id)}></input>
									<div className="checkmark">{ selectedSkintone === ('skin-04') ? '✗' : '' }</div>
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
						updateSelectedKidData(kidObj._id)
							.then(() => {
								history.go(0)
							});
						
					}}></input>
				</form>

			</div>
		</div>
	);
	
};

export default SupervisorSettingsPage;
