import { default as React, useState } from 'react';
import { useApi, useAuth } from '../../services';
import * as Routes from '../../routes';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Nav } from '..'
import {ReactComponent as BergGesprekBG} from './BergGesprek.svg';

import './mountainGesprek.scss'

const MountainGesprek = (id) => {
	const { saveMountainFiche, updateSelectedKidData } = useApi();
	const [kid, setKid] = useState({ question1: "", question2: "" })

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);

	function saveConvo(kid){
		//console.log(kid);
		var question1 = kid.question1;
		var question2 = kid.question2;
		var positionById = id.id;
		var kidId = kidObj._id;
		console.log(question1 , question2 , positionById);
		saveMountainFiche(question1,question2,positionById, kidId)
			.then(() => {
				updateSelectedKidData();
			});

	}

    return ( 
        <div>
		    <Nav />
            <BergGesprekBG />
            <div class="gesprek-container">
                <form className="gesprek-inputBox">
                    <label> Waar hebben we rond gepraat en gewerkt? <textarea name="bergGesprek1" rows="4" cols="30" className="berg-gesprek-field" onChange={e => setKid({ ...kid, question1: e.target.value })}/></label>
                    <label> Wat voel en denk ik hierbij? <textarea name="bergGesprek2" rows="4" cols="30" className="berg-gesprek-field" onChange={e => setKid({ ...kid, question2: e.target.value })}/></label>
                </form>
            </div>
            <a href={Routes.SUPERVISOR_MOUNTAIN} class="myButton">Terug</a>
            <a href={Routes.SUPERVISOR_MOUNTAIN} class="myButton" onClick={() => { saveConvo(kid) }} >opslaan</a>
		</div>
	);
	
};

export default MountainGesprek;
