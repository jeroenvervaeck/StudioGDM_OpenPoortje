import { default as React, useState, Fragment } from 'react';
import animation from "../../assets/DIALOOG_HUIDSKLEUR1.gif";
import * as Routes from '../../routes';
import { useApi, useAuth } from '../../services';
import './SupervisorDialogFiche.scss';
import Board from '../../components/stickers/Board'

const SupervisorDialogFiche = () => {

	const { saveDialogFiche, updateSelectedKidData } = useApi();
	const [kid, setKid] = useState({ questionBlue: "", questionYellow: "", questionRed: "" })
	const [ screenshot, setScreenshot ] = useState();

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);

	function saveDialog(kid, screenshot){
		//console.log(kid);
		var questionBlue = kid.questionBlue;
		var questionYellow = kid.questionYellow;
		var questionRed = kid.questionRed;
		var kidId = kidObj._id;
	
		return saveDialogFiche(questionBlue, questionYellow, questionRed, kidId, screenshot)
			.then(() => {
				updateSelectedKidData();
			});

	}

	return (
		<div className="supervisor-dialog">
			<Board onSave={(screenshot) => { saveDialog(kid, screenshot) }} />
			<h1>Ervaringsdialoog</h1>
			<div className="blueBoxContainer">
				<h4 className="dialogTitle" style={{color: "#02A6C4"}}>Wat ik denk:</h4>
                <textarea name="blueBox" rows="4" cols="30" className="dialogBox" onChange={e => setKid({ ...kid, questionBlue: e.target.value })} />
            </div>
			<div className="yellowBoxContainer">
				<h4 className="dialogTitle" style={{color: "#FEC81B"}}>Wat ik voel:</h4>
                <textarea name="yellowBox" rows="4" cols="30" className="dialogBox" onChange={e => setKid({ ...kid, questionYellow: e.target.value })} />
            </div>
			<div className="redBoxContainer">
				<h4 className="redDialogTitle" style={{color: "#EF4742"}}>Wat ik zou willen:</h4>
                <textarea name="redBox" rows="4" cols="30" className="dialogBox redBox" onChange={e => setKid({ ...kid, questionRed: e.target.value })}/>
            </div>
			<img src={animation} alt="animation" id="dialogAnimation" width="200px"></img>
		</div>
	);
	
};

export default SupervisorDialogFiche;
