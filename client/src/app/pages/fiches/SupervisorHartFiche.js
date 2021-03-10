import { default as React, useState, Fragment } from 'react';
import { useApi } from '../../services';
import './SupervisorHartFiche.scss';
import Board from '../../components/stickers/Board'
import { useHistory } from 'react-router-dom'

const SupervisorHartFiche = () => {
	const history = useHistory();
	const [kid, setKid] = useState()

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);


	return (
		<div className="supervisor-hart">
			<Board 
				onSave={(screenshot) => { console.log(screenshot) }}
				onBack={() => history.goBack()} 
			/>

			{/* Animation will be here */}

		</div>
	);
	
};

export default SupervisorHartFiche;
