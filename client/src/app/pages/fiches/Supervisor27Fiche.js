import { default as React, useState } from 'react';
import './Supervisor#.scss';
import Board from '../../components/stickers/Board'
import { useHistory } from 'react-router-dom'
import { useApi } from '../../services';
import * as Routes from '../../routes';

import ficheSVG from '../../../app/assets/fiches/WAARWILJEVOORSPAREN.png';

const Supervisor27Fiche = () => {
	const history = useHistory();
	const [kid, setKid] = useState()
	const { saveFiche, updateSelectedKidData } = useApi(); 

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);

	function save(screenshot){
		var kidId = kidObj._id;
	
		return saveFiche(  kidId, '604a0cc26f94830004ba8907', screenshot)
			.then(() => {
				updateSelectedKidData();
				history.push(Routes.SUPERVISOR_DASHBOARD);
			});

	}

	return (
		<div className="fiche-extra supervisor-27">
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

export default Supervisor27Fiche;
