import { default as React, useState } from 'react';
import { useApi, useAuth } from '../../services';
import * as Routes from '../../routes';
import { Redirect, useHistory } from 'react-router-dom';
import { Board } from '..'
import {ReactComponent as BergGesprekBG} from './BergGesprek.svg';

import './mountainGesprek.scss'

const MountainGesprek = (id) => {
	const history = useHistory();
	const { saveMountainFiche, updateSelectedKidData } = useApi();

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);
	console.log(id);

	const saveCanvo = (screenshot) => {
		var question1 = document.getElementById("q1").value;
		var question2 = document.getElementById("q2").value;
		var positionById = id.id;
		var kidId = kidObj._id;
		console.log(id)

		saveMountainFiche(question1,question2, positionById, kidId, screenshot)
			.then(() => {
				updateSelectedKidData();
				history.push(Routes.SUPERVISOR_DASHBOARD);
			});

	}

    return ( 
        <div className="supervisor-gesprek">
			<div className="gesprekFiche">
		    {/* <Nav /> */}
            <BergGesprekBG />
            <div className="gesprek-container">
                <form className="gesprek-inputBox">
                    <label> Waar hebben we rond gepraat en gewerkt? <textarea name="bergGesprek1" rows="4" cols="30" className="berg-gesprek-field" id="q1"/></label>
                    <label> Wat voel en denk ik hierbij? <textarea name="bergGesprek2" rows="4" cols="30" className="berg-gesprek-field" id="q2"/></label>
                </form>
            </div>
            {/* <a href={Routes.SUPERVISOR_MOUNTAIN} className="myButton">Terug</a>
            <a href={Routes.SUPERVISOR_MOUNTAIN} className="myButton" onClick={() => { saveConvo(kid) }} >opslaan</a> */}
			</div>
			< Board
				onSave={(screenshot) => { 
					saveCanvo(screenshot) 
				}}
				onBack={(e) => {
					e.preventDefault();
					history.goBack();
				}}
			/>
		</div>
	);
	
};

export default MountainGesprek;
