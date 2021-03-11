import { default as React, useState, Fragment } from 'react';
import { useApi } from '../../services';
import * as Routes from '../../routes';
import './SupervisorMoneyFiche.scss';
import Board from '../../components/stickers/Board';
import { useHistory } from 'react-router-dom';
import Animationskin_01 from '../../assets/ZAKGELD_HUIDSKLEUR1.gif';
import Animationskin_02 from '../../assets/ZAKGELD_HUIDSKLEUR2.gif';
import Animationskin_03 from '../../assets/ZAKGELD_HUIDSKLEUR3.gif';
import Animationskin_04 from '../../assets/ZAKGELD_HUIDSKLEUR4.gif';

const SupervisorMoneyFiche = () => {
	const history = useHistory();
	const [kid, setKid] = useState();
	const { saveMoneyFiche, updateSelectedKidData } = useApi();

	const kidObj = JSON.parse(sessionStorage.getItem('selected-kid'))
	console.log(kidObj);

	const saveCanvo = (screenshot) => {
		var moneyAmount = document.getElementById("moneyAmount").value;
		var kidId = kidObj._id;

		saveMoneyFiche(moneyAmount, kidId, screenshot)
			.then(() => {
				updateSelectedKidData();
				history.push(Routes.SUPERVISOR_DASHBOARD);
			});

	}


	return (
		<div className="supervisor-money">
			<div className="moneyFiche">
				<div className="moneyAnimation">
				{(() => {
				
				console.log(kidObj.skin_color);

				switch (kidObj.skin_color) {
					case "skin-01":
						return (
							<img src={Animationskin_01} alt="Animationskin_01" className="HartAnimation" width="800px"></img>
						)
					case "skin-02":
						return (
							<img src={Animationskin_02} alt="Animationskin_02" className="HartAnimation" width="800px"></img>
						)
					case "skin-03":
						return (
							<img src={Animationskin_03} alt="Animationskin_03" className="HartAnimation" width="800px"></img>
						)
					case "skin-04":
						return (
							<img src={Animationskin_04} alt="Animationskin_04" className="HartAnimation" width="800px"></img>
						)
					default:
						return (
							<img src={Animationskin_01} alt="Animationskin_01" className="HartAnimation" width="800px"></img>
						)
				}

				})()}
				</div>
				<div className="moneyText">
					<p>Je hebt recht op zakgeld wanneer je ouder dan 6 bent en je hier langer dan 4 weken verblijft.</p>
					<ul className="moneyList">
						<li>Het zakgeld verschilt per leeftijd</li>
						<li>Je krijgt elke maand zakgeld</li>
						<li>Je zet je handtekening elke keer je het zakgeld krijgt</li>
						<li>Het zakgeld wordt bewaard in jouw eigen geldkistje</li>
						<li>Je beslist zelf wat je met je zakgeld doet</li>
					</ul>
					<form className="money-inputBox">
                    	<label> Hoeveel zakgeld krijg jij?  <input type="text" id="zakgeld" name="zakgeld" id="moneyAmount"></input></label>
                	</form>
				</div>
			</div>

		<Board 
			onSave={(screenshot) => { saveCanvo(screenshot) }}
			onBack={() => history.goBack()} 
		/>

		</div>
	);
	
};

export default SupervisorMoneyFiche;
