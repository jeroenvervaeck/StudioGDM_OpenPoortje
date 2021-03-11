import { default as React, useState } from 'react';
import './Supervisor#.scss';
import Board from '../../components/stickers/Board'
import { useHistory } from 'react-router-dom'
import { useApi } from '../../services';
import * as Routes from '../../routes';

import ficheSVG from '../../../app/assets/fiches/WELKOM.png';

const Supervisor13Fiche = () => {
	const history = useHistory();
	const { saveFiche, updateSelectedKidData } = useApi();  

	const [kid, setKid] = useState()

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);


	function save(screenshot){
		var kidId = kidObj._id;
	
		return saveFiche(  kidId, '604a0d296f94830004ba8909', screenshot)
			.then(() => {
				updateSelectedKidData();
				history.push(Routes.SUPERVISOR_DASHBOARD);
			});

	}

	return (
		<div className="fiche-extra supervisor-13">
			<Board 
				onSave={save}
				onBack={() => history.goBack()} 
			/>

			<div className="visual-content">
				<img src={ficheSVG}/>
			</div>

		</div>
	);
	
};

export default Supervisor13Fiche;
