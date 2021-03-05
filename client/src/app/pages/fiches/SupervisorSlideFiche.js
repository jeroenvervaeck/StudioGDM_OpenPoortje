import { default as React, useState, Fragment } from 'react';
import { useApi } from '../../services';
import './SupervisorSlideFiche.scss';
import Board from '../../components/stickers/Board'
import { useHistory } from 'react-router-dom'

const SupervisorSlideFiche = () => {
	const history = useHistory();
	const [kid, setKid] = useState()

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);


	return (
		<div className="supervisor-slide">
		<Board 
			onSave={(screenshot) => { console.log(screenshot) }}
			onBack={() => history.goBack()} 
		/>

			{/* Animation will be here */}

		</div>
	);
	
};

export default SupervisorSlideFiche;
