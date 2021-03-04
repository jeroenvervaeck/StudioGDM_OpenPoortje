import { default as React, useState } from 'react';
import { useApi } from '../../services'; 
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import './SupervisorInfoPage.scss';

import { Nav } from '../../components';

const SupervisorInfoPage = () => {
	const { eraseCookie,colors } = useApi();
	const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')));

	const [show01, setShow01] = useState(false);
	const onClick01 = () => setShow01(!show01);
	const [show02, setShow02] = useState(false);
	const onClick02 = () => setShow02(!show02);
	const [show03, setShow03] = useState(false);
	const onClick03 = () => setShow03(!show03);
	const [show04, setShow04] = useState(false);
	const onClick04 = () => setShow04(!show04);

	return (
		<div>
			<Nav />
			<div className="supervisor-info">
				<h1>Infopage</h1>
				<div className="supervisor-info__main">
					<div className="supervisor-info__main-card" style={{backgroundColor: colors[(kid) ? kid.theme_color : 'color-01']}}>
						<div className="supervisor-info__main-card-display" onClick={onClick01}>
							<h1>1. De app voor de eerste keer gebruiken</h1>
							{ show01 ? <FaAngleUp /> : <FaAngleDown /> }
						</div>
						{ show01 ?
							<p className="supervisor-info__main-card-text">
								Wanneer u de digitale Kid-Ok-Kit voor het eerst opent wordt u een inlogscherm gepresenteerd. Hier logt u uw organisatie in door bij “Username” de naam van uw organisatie in te vullen bijvoorbeeld “Het Open Poortje” waarna u bij “Wachtwoord” het wachtwoord invult dat uw organisatie is gegeven. 	
								<br></br><strong>1.1 Inloggen als begeleider</strong><br></br> 
								Wanneer uw organisatie is ingelogd komt u terecht op de Organisatie Dashboard pagina. Hier tikt u op de knop “Open Begeleidingsomgeving”. U krijgt een tweede inlogscherm te zien. Hier vult u de door de organisatie aan u gegeven gebruikersnaam en wachtwoord in. Eens u deze heeft ingevuld drukt u op “LOGIN” en zo kan u beginnen met het gebruik van de Kid-Ok-Kit!
							</p>
							:
							undefined
						}
					</div>
					<div className="supervisor-info__main-card" style={{backgroundColor: colors[(kid) ? kid.theme_color : 'color-01']}}>
						<div className="supervisor-info__main-card-display" onClick={onClick02}>
							<h1>2. Een fiche invullen</h1>
							{ show02 ? <FaAngleUp /> : <FaAngleDown /> }
						</div>
						{ show02 ?
							<p className="supervisor-info__main-card-text">
								De digitale Kid-Ok-Kit is bedoeld om onder toezicht van een begeleider door het kind aangevuld te worden. Concreet wil dit zeggen dat u de relevante fiche voor het kind klaarzet zodat het kind deze zelfstandig kan invullen.
								<br></br><strong>2.1 De juiste begeleider inloggen</strong><br></br> 
								Voordat u een fiche kunt invullen moet u ervoor zorgen dat de juiste begeleider in de Kid-Ok-Kit is ingelogd. Om dit te zien tikt u linksboven op het menu en kijkt u naar de naam die er net onder is verschenen. Indien een andere begeleider is ingelogd tikt u naast zijn of haar naam op het pijl icoontje om van account te verwisselen. U logt vervolgens met uw eigen gebruikersnaam en wachtwoord in
								<br></br><strong>2.2. Kiezen met welk kind u een fiche wilt invullen</strong><br></br> 
								Wanneer u bent ingelogd krijgt u een scherm te zien van alle kinderen die momenteel door de organisatie worden geholpen. Aan de hand van de zoekbalk zoekt u de naam van het kind met wie u een fiche wilt invullen. Vervolgens tikt u op zijn of haar naam waarna u wordt omgeleid naar het Begeleiders Dashboard.
								<br></br><strong>2.3. Kiezen welke fiche u invult</strong><br></br> 
								In het Begeleiders Dashboard kan u linksboven tikken op het menu, daar krijgt u snel toegang tot de begeleidingslijn en het ervaringsdialoog. Als u een andere fiche wilt invullen tikt u op “Fiches”. Op deze pagina — “Fiches” — kunt u aan de hand van de gegeven categorieën of de zoekbalk bovenaan de juiste fiche vinden.
							</p>
							:
							undefined
						}
					</div>
					<div className="supervisor-info__main-card" style={{backgroundColor: colors[(kid) ? kid.theme_color : 'color-01']}}>
						<div className="supervisor-info__main-card-display" onClick={onClick03}>
							<h1>3. De fiche editor</h1>
							{ show03 ? <FaAngleUp /> : <FaAngleDown /> }
						</div>
						{ show03 ?
							<p className="supervisor-info__main-card-text">
								<br></br><strong>3.1. Wat kan ik doen met de fiche editor?</strong><br></br> 
								De editor is op zo’n manier gemaakt dat het meeste dat op papier kan worden gedaan ook digitaal kan worden gedaan. Zo kunnen er tekst, foto’s, tekeningen en zelfs leuke stickers ingevoegd worden.  Bijkomend is ook dat sommige fiches interacties kunnen bevatten. Dit zijn kleine acties waarmee we hopen het kind al spelend de fiche kan ontdekken en invullen.
								<br></br><strong>3.2. Hoe gebruik ik de functies in de fiche editor?</strong><br></br> 
								Tekst invoegen kan op 2 manieren gebeuren. Ofwel tik je op een tekstveld in de fiche zelf, of u tikt links onderaan op het “A” icoon om tekst te plaatsen waar u het zelf wil.
								<br></br>
								U voegt een afbeelding in door linksonder op de middelste knop — de knop met het berg icoontje — te tikken. Vervolgens zal u gevraagd worden een foto te selecteren uit de foto’s op het apparaat of een nieuwe foto te nemen. (Mogelijks zal u het kind hier even moeten helpen) Wanneer u een foto heeft geselecteerd of gemaakt verschijnt deze op de fiche en kan deze verplaatst of groter/kleiner gemaakt worden.
								<br></br>
								Om het kind te helpen zijn of haar gevoelens visueel weer te geven zijn er een reeks stickers voorzien. Deze kunnen ingevoegd worden door linksonder op de derde knop te tikken, de knop met het gezichtje. Hier kan het kind uit een lijst kiezen welke sticker hij of zij wil invoegen. Eens deze is ingevoegd kan deze worden verplaatst of groter/kleiner worden gemaakt.
								<br></br>
								Tekeningen kunnen ook aan de fiches worden toegevoegd aan de hand van het sticker component. Je tikt eerst op de sticker knop en vervolgens op “Maak een tekening”.
							</p>
							:
							undefined
						}
					</div>
					<div className="supervisor-info__main-card" style={{backgroundColor: colors[(kid) ? kid.theme_color : 'color-01']}}>
						<div className="supervisor-info__main-card-display" onClick={onClick04}>
							<h1>4. Kinderen en begeleiders toevoegen, verwijderen of bewerken.</h1>
							{ show04 ? <FaAngleUp /> : <FaAngleDown /> }
						</div>
						{ show04 ?
							<p className="supervisor-info__main-card-text">
								Elke organisatie bevat 2 lijsten. Een lijst met alle kinderen die door uw organisatie geholpen worden en een lijst van hun begeleiders. In beide lijsten kunt u gebruikers toevoegen, verwijderen of de informatie van bestaande gebruikers bewerken. Om gebruikers te beheren drukt u op de pagina Organisatie Dashboard onder “Kinderen of begeleiders beheren” op “Kinderen” of “Begeleiders” afhankelijk van welke lijst u wilt bewerken.
								<br></br><strong>4.1 Kinderen of begeleiders toevoegen</strong><br></br> 
								U voegt een gebruiker toe door linksonder op de knop “Begeleider / Kind toevoegen” te tikken. Vervolgens vult u het gepresenteerde formulier in en tikt u op “Opslaan”
								<br></br><strong>4.2 Kinderen of begeleiders zoeken</strong><br></br> 
								Er zijn twee manieren om kinderen of begeleiders terug te vinden in de database.
								<br></br>
								1. Rechtsboven vindt u een zoekbalk. In deze balk typt u de naam of gebruikersnaam van de persoon die zoekt. 
								<br></br>
								2. Boven elke kolom vindt u een filterknop. Door op deze te klikken filtert u per kolom op alfabetische volgorde.
								<br></br><strong>4.3 Kinderen of begeleiders bewerken of verwijderen</strong><br></br>
								De informatie van zowel kinderen als begeleiders kan achteraf bewerkt of verwijderd worden. Dit doet u door eerst te zoeken naar de relevante gebruiker (zie 3.2) en vervolgens rechts van hun naam te tikken op “Bewerk” of — in het geval dat u deze wilt verwijderen — op het vuilbak icoontje helemaal rechts.
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
