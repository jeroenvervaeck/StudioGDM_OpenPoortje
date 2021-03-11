import { default as React, useState, Fragment } from 'react';
import { useApi } from '../../services';
import './SupervisorHartFiche.scss';
import Board from '../../components/stickers/Board';
import { useHistory } from 'react-router-dom';
import Animationskin_01 from '../../assets/HART_HUIDSKLEUR1.gif';
import Animationskin_02 from '../../assets/HART_HUIDSKLEUR2.gif';
import Animationskin_03 from '../../assets/HART_HUIDSKLEUR3.gif';
import Animationskin_04 from '../../assets/HART_HUIDSKLEUR4.gif';

const SupervisorHartFiche = () => {
	const history = useHistory();
	const [kid, setKid] = useState()

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);

	return (
		<div className="supervisor-hart">

		{(() => {
		
		console.log(kidObj.skin_color);

		switch (kidObj.skin_color) {
			case "skin-01":
				return (
					<img src={Animationskin_01} alt="Animationskin_01" className="HartAnimation" width="400px"></img>
				)
			case "skin-02":
				return (
					<img src={Animationskin_02} alt="Animationskin_02" className="HartAnimation" width="400px"></img>
				)
			case "skin-03":
				return (
					<img src={Animationskin_03} alt="Animationskin_03" className="HartAnimation" width="400px"></img>
				)
			case "skin-04":
				return (
					<img src={Animationskin_04} alt="Animationskin_04" className="HartAnimation" width="400px"></img>
				)
			default:
				return (
					<img src={Animationskin_01} alt="Animationskin_01" className="HartAnimation" width="400px"></img>
				)
		}

		})()}

		<Board 
			onSave={(screenshot) => { console.log(screenshot) }}
			onBack={() => history.goBack()} 
		/>

		</div>
	);
	
};

export default SupervisorHartFiche;
