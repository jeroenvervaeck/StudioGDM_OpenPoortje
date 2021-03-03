import { default as React, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import './SupervisorInfoPage.scss';

import { Nav } from '../../components';

const SupervisorInfoPage = () => {
	const [show01, setShow01] = useState(false);
	const onClick01 = () => setShow01(!show01);

	return (
		<div>
			<Nav />
			<div className="supervisor-info">
				<h1>Infopage</h1>
				<div className="supervisor-info__main">
					<div className="supervisor-info__main-card">
						<div className="supervisor-info__main-card-display" onClick={onClick01}>
							<h1>title info</h1>
							{ show01 ? <FaAngleUp /> : <FaAngleDown /> }
						</div>
						{ show01 ?
							<p className="supervisor-info__main-card-text">
								Wanneer u de digitale Kid-Ok-Kit voor het eerst opent wordt u een inlogscherm gepresenteerd. Hier logt u uw organisatie in door bij “Username” de naam van uw organisatie in te vullen bijvoorbeeld “Het Open Poortje” waarna u bij “Wachtwoord” het wachtwoord invult dat uw organisatie is gegeven. 1.1 Inloggen als begeleider Wanneer uw organisatie is ingelogd komt u terecht op de Organisatie Dashboard pagina. Hier tikt u op de knop “Open Begeleidingsomgeving”. U krijgt een tweede inlogscherm te zien. Hier vult u de door de organisatie aan u gegeven gebruikersnaam en wachtwoord in. Eens u deze heeft ingevuld drukt u op “LOGIN” en zo kan u beginnen met het gebruik van de Kid-Ok-Kit!
							</p>
							:
							undefined
						}
					</div>
				</div>
			</div>
		</div>
	);
	
};

export default SupervisorInfoPage;
