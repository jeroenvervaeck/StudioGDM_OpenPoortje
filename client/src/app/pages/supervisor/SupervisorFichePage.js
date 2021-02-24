import { default as React } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Fiches } from '../../components';

import './SupervisorFichePage.scss'

import { Nav } from '../../components'

const SupervisorFichePage = () => {
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
					<Fiches catogerie="CKG" color="#EF4742" />
					<Fiches catogerie="Ik" color="#FAAB4B" />
					<Fiches catogerie="Rechten" color="#01AEB1" />
				</div>
				
			</div>
		</div>
	);
	
};

export default SupervisorFichePage;
