import { default as React, useState, Fragment } from 'react';
import animation from "../../assets/DIALOOG_HUIDSKLEUR1.gif";
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
	
		saveDialogFiche(questionBlue, questionYellow, questionRed, kidId, screenshot)
			.then(() => {
				updateSelectedKidData();
			});

	}

	return (
		<Fragment>
			<Board onSave={(screenshot) => { saveDialog(kid, screenshot) }} />
			<div className="supervisor-dialog">
				<h1>Dialog fiche</h1>
				<div className="blueBoxContainer">
					<textarea name="blueBox" rows="4" cols="30" className="dialogBox" onChange={e => setKid({ ...kid, questionBlue: e.target.value })} />
				</div>
				<div className="yellowBoxContainer">
					<textarea name="yellowBox" rows="4" cols="30" className="dialogBox" onChange={e => setKid({ ...kid, questionYellow: e.target.value })} />
				</div>
				<div className="redBoxContainer">
					<textarea name="redBox" rows="4" cols="30" className="dialogBox redBox" onChange={e => setKid({ ...kid, questionRed: e.target.value })}/>
				</div>
				<img src={animation} alt="animation" id="dialogAnimation" width="200px"></img>

			</div>
		</Fragment>
	);
	
};

export default SupervisorDialogFiche;
