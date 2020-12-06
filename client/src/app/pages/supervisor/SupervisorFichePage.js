import { default as React } from 'react';
import { FaSearch } from 'react-icons/fa';

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
					fiches
				</div>
				
			</div>
		</div>
	);
	
};

export default SupervisorFichePage;
