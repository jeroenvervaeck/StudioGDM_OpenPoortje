import { default as React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './kid.scss';

import { FicheTimeline, FicheDetail } from '../../components'

import { useApi, useAuth } from '../../services'; 
import { LOGIN_MAIN } from '../../routes';

const KidPage = () => {
	const { colors, getUrl, getKidFicheTypes } = useApi();
	const { logoutUser } = useAuth();
	const [ fiches, setFiches ] = useState();
	const [ selectedFiche, setSelectedFiche ] = useState();
	const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('user')).kid);

	useEffect(() => {
		const getFiches = async () => {
			const types = await getKidFicheTypes();
			console.log(types);

			const fichesFromStorage = JSON.parse(sessionStorage.getItem('user')).kid.fiches;
			const newFiches = fichesFromStorage.map((fiche) => {
				const newFiche = fiche;
				newFiche.fiche_type = types.filter((type) => type._id === fiche.fiche_type)[0].name;
				return newFiche;
			});
			setFiches(newFiches);
		}
		if (!fiches || fiches && fiches.length === 0) getFiches();
	}, [fiches]);

	const renderFiches = () => {
		return fiches.map((fiche, index) => {
			return (<FicheTimeline 
				key={index}
				imgSrc={(fiche.picture_name) ?  getUrl('/picture/'+fiche.picture_name) : undefined}
				date={fiche._created_at}
				onClick={() => setSelectedFiche(fiche)}
				name={fiche.fiche_type}
			/>)
		});
	}

	return (
		<div className="kid-page">
			<Link to={LOGIN_MAIN} className="kid-page__logout" onClick={ () => logoutUser() }>
				<p>Afmelden</p>
			</Link>

			{ 
				selectedFiche && <FicheDetail 
					imgSrc={(selectedFiche.picture_name) ?  getUrl('/picture/'+selectedFiche.picture_name) : undefined}
					date={selectedFiche._created_at}
					name={selectedFiche.fiche_type}
					onClose={() => setSelectedFiche()}
				/> 
			}

			<h1 style={{color: colors[(kid) ? kid.theme_color : 'color-01']}}>Jouw tijdlijn</h1>
			<div className="kid-page__timeline">
				<div className="kid-page__timeline-month">
					<div className="kid-page__timeline-month-wrapper">
						{
							(fiches)
							? renderFiches()
							: null
						}
					</div>
				</div>
			</div>
		</div>
	);
	
};

export default KidPage;
