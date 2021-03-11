import { default as React, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Fiches } from '../../components';
import { useApi } from '../../services';

import './SupervisorFichePage.scss'

import { Nav } from '../../components'

const SupervisorFichePage = () => {
	const { getFicheTypes } = useApi();

	const [ ficheTypes, setFicheTypes ] = useState();

	useEffect(() => {
		const doFetch = async() => {
			const types = await getFicheTypes();
			setFicheTypes(types.filter((type) => type._id !== "601a996b352c1d313cd7bca2"));
		}

		if (!ficheTypes) doFetch();
	}, [ficheTypes]);

	return (
		<div>
			<Nav />
			<div className="supervisor-fiche">
				<h1>Selecteer een fiche</h1>

{/*
 				<form className="supervisor-fiche__filter">
					<div className="supervisor-fiche__filter-search">
						<FaSearch />
						<input type="text" placeholder="Zoek op naam.."></input>
					</div>
				</form> 
*/}

				<div className="supervisor-fiche__content">
					<Fiches catogerie="CKG" color="#EF4742" fiches={(ficheTypes) ? ficheTypes.filter((type) => type.category === 'CKG') : []} />
					<Fiches catogerie="Ik" color="#FAAB4B" fiches={(ficheTypes) ? ficheTypes.filter((type) => type.category === 'Ik') : []} />
					<Fiches catogerie="Rechten" color="#01AEB1" fiches={(ficheTypes) ? ficheTypes.filter((type) => type.category === 'Rechten') : []} />

				</div>
				
			</div>
		</div>
	);
	
};

export default SupervisorFichePage;
