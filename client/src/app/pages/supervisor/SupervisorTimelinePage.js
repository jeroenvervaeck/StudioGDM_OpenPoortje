import { default as React, useEffect, useState } from 'react';

import './SupervisorTimelinePage.scss';

import { Nav, FicheTimeline, FicheDetail } from '../../components';

import { useApi } from '../../services';

const SupervisorTimelinePage = () => {
	const { getUrl, getFicheTypes } = useApi();

	const [ fiches, setFiches ] = useState([]);
	const [ selectedFiche, setSelectedFiche ] = useState();

	useEffect(() => {
		const getFiches = async () => {
			const types = await getFicheTypes();

			const fichesFromStorage = JSON.parse(sessionStorage.getItem('selected-kid')).fiches;
			const newFiches = fichesFromStorage.map((fiche) => {
				const newFiche = fiche;

				newFiche.fiche_type = (types.filter((type) => type._id === fiche.fiche_type)[0]) ? types.filter((type) => type._id === fiche.fiche_type)[0].name : '';
				return newFiche;
			});
			setFiches(newFiches);
		}
		if (!fiches.length) getFiches();
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
		<div>
			<Nav />
			<div className="supervisor-timeline">

				{ 
					selectedFiche && <FicheDetail 
						imgSrc={(selectedFiche.picture_name) ?  getUrl('/picture/'+selectedFiche.picture_name) : undefined}
						date={selectedFiche._created_at}
						name={selectedFiche.fiche_type}
						onClose={() => setSelectedFiche()}
					/> 
				}

				<h1>Jouw tijdlijn</h1>
				<div className="supervisor-timeline__month">
					<div className="supervisor-timeline__month-wrapper">
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

export default SupervisorTimelinePage;
