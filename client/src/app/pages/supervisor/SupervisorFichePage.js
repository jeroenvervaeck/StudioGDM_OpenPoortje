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
			console.log(types)
			setFicheTypes(types);
		}

		if (!ficheTypes) doFetch();
	}, [ficheTypes]);

	return (
		<div>
			<Nav />
			<div className="supervisor-fiche">
				<h1>Selecteer een fiche</h1>

				<form className="supervisor-fiche__filter">
					<div className="supervisor-fiche__filter-search">
						<FaSearch />
						<input type="text" placeholder="Zoek op naam.."></input>
					</div>
				</form>

				<div className="supervisor-fiche__content">
<<<<<<< HEAD
					<Fiches catogerie="CKG" color="#EF4742" fiches={(ficheTypes) ? ficheTypes.filter((type) => type.category === 'CKG').map((type) => type.name) : []} />
					<Fiches catogerie="Ik" color="#FAAB4B" fiches={(ficheTypes) ? ficheTypes.filter((type) => type.category === 'Ik').map((type) => type.name) : []} />
					<Fiches catogerie="Rechten" color="#01AEB1" fiches={(ficheTypes) ? ficheTypes.filter((type) => type.category === 'Rechten').map((type) => type.name) : []} />
=======
					<Fiches catogerie="CKG" color="#EF4742" fiches={['Ervaringsdialoog']} />
					<Fiches catogerie="Ik" color="#FAAB4B" fiches={['Hart']} />
					<Fiches catogerie="Rechten" color="#01AEB1" fiches={['Zakgeld']} />
>>>>>>> 030da1fc54a708f9cfc91f5b8c0a68eaf6b5bd6d
				</div>
				
			</div>
		</div>
	);
	
};

export default SupervisorFichePage;
