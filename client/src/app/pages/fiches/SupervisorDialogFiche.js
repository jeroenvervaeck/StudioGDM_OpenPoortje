import { default as React, useState, Fragment } from 'react';
import animation from "../../assets/DIALOOG_HUIDSKLEUR1.gif";
import * as Routes from '../../routes';
import { useApi, useAuth } from '../../services';
import './SupervisorDialogFiche.scss';
import Board from '../../components/stickers/Board';
import { useHistory } from 'react-router-dom';
import Animationskin_01 from '../../assets/DIALOOG_HUIDSKLEUR1.gif';
import Animationskin_02 from '../../assets/DIALOOG_HUIDSKLEUR1.gif';
import Animationskin_03 from '../../assets/DIALOOG_HUIDSKLEUR1.gif';
import Animationskin_04 from '../../assets/DIALOOG_HUIDSKLEUR1.gif';

const SupervisorDialogFiche = () => {
	const history = useHistory();

	const { saveDialogFiche, updateSelectedKidData } = useApi();

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);

	function saveDialog(screenshot){
		//console.log(kid);
		var questionBlue = document.getElementById('q1').value;
		var questionYellow = document.getElementById('q2').value;
		var questionRed = document.getElementById('q3').value;
		var kidId = kidObj._id;

		console.log(questionBlue, questionYellow, questionRed);
	
		return saveDialogFiche(questionBlue, questionYellow, questionRed, kidId, screenshot)
			.then(() => {
				updateSelectedKidData();
				history.push(Routes.SUPERVISOR_DASHBOARD);
			});

	}

	return (
		<div className="supervisor-container" >
			<div className="supervisor-dialog">
				<div className="blueBoxContainer">
					<h4 className="dialogTitle" style={{color: "#02A6C4"}}>Wat ik denk:</h4>
					<textarea name="blueBox" rows="4" cols="30" className="dialogBox" id="q1" />
				</div>
				<div className="yellowBoxContainer">
					<h4 className="dialogTitle" style={{color: "#FEC81B"}}>Wat ik voel:</h4>
					<textarea name="yellowBox" rows="4" cols="30" className="dialogBox" id="q2" />
				</div>
				<div className="redBoxContainer">
					<h4 className="redDialogTitle" style={{color: "#EF4742"}}>Wat ik zou willen:</h4>
					<textarea name="redBox" rows="4" cols="30" className="dialogBox redBox" id="q3"/>
				</div>
				{(() => {

				switch (kidObj.skin_color) {
					case "skin-01":
						return (
							<img src={Animationskin_01} alt="Animationskin_01" id="dialogAnimation" width="200px"></img>
						)
					case "skin-02":
						return (
							<img src={Animationskin_02} alt="Animationskin_02" id="dialogAnimation" width="200px"></img>
						)
					case "skin-03":
						return (
							<img src={Animationskin_03} alt="Animationskin_03" id="dialogAnimation" width="200px"></img>
						)
					case "skin-04":
						return (
							<img src={Animationskin_04} alt="Animationskin_04" id="dialogAnimation" width="200px"></img>
						)
					default:
						return (
							<img src={Animationskin_01} alt="Animationskin_01" id="dialogAnimation" width="200px"></img>
						)
				}

				})()}
			</div>
			<Board 
				onSave={(screenshot) => { saveDialog(screenshot) }}
				onBack={(e) => {
					history.goBack();
				}}
			/>
		</div>
	);
	
};

export default SupervisorDialogFiche;
