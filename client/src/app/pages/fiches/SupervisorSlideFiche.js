import { default as React, useState, Fragment } from 'react';
import { useApi } from '../../services';
import './SupervisorSlideFiche.scss';
import Board from '../../components/stickers/Board';
import { useHistory } from 'react-router-dom';
//import AnimateCC from "react-adobe-animate";

const SupervisorSlideFiche = () => {
	const history = useHistory();
	const [kid, setKid] = useState()

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);
	
	/*
	//Animation
	const [paused, setPaused] = useState(true);
  	const [ , setAnimationObject] = useState(null);
	const AnimationObject = obj => setAnimationObject(obj);
  	const onClick = () => setPaused(!paused);

  	console.log(AnimationObject);
	*/

	return (
		
		<div className="supervisor-slide">
		
		{/*
		<div style={{ width: "400px" }}>
			<AnimateCC
				animationName="GLIJBAAN_HTML5Canvas"
				paused={paused}
			/>
			<button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button><br />
		</div>
		*/}
		<Board 
			onSave={(screenshot) => { console.log(screenshot) }}
			onBack={() => history.goBack()} 
		/>

			{/* Animation will be here */}

		</div>
	);
	
};

export default SupervisorSlideFiche;
