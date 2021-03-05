import { default as React, useState, Fragment } from 'react';
import { useApi } from '../../services';
import './SupervisorSlideFiche.scss';
import Board from '../../components/stickers/Board'

const SupervisorSlideFiche = () => {
	const [kid, setKid] = useState()

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);


	return (
		<div className="supervisor-slide">
			<Board onSave={(screenshot) => { console.log(screenshot) }} />

			{/* Animation will be here */}

		</div>
	);
	
};

export default SupervisorSlideFiche;
