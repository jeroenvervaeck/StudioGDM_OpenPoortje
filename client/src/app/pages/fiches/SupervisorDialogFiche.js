import { default as React, useState, Fragment } from 'react';
import animation from "../../assets/DIALOOG_HUIDSKLEUR1.gif";
import * as Routes from '../../routes';
import { useApi, useAuth } from '../../services';
import './SupervisorDialogFiche.scss';
import Board from '../../components/stickers/Board';
import { useHistory } from 'react-router-dom';

const SupervisorDialogFiche = () => {

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
				<img src={animation} alt="animation" id="dialogAnimation" width="200px"></img>
			</div>
			<Board 
				onSave={(screenshot) => { saveDialog(screenshot) }}
				onBack={(e) => {
					e.preventDefault();
					useHistory.push(Routes.SUPERVISOR_DASHBOARD);
				}}
			/>
		</div>
	);
	
};

export default SupervisorDialogFiche;
