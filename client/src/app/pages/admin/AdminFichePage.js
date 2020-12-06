import { default as React } from 'react';
import { FaSearch } from 'react-icons/fa';

import './AdminFichePage.scss'

import { Nav } from '../../components'

const AdminFichePage = () => {
	return (
		<div>
			<Nav />
			<div className="admin-fiche">
				<h1>Selecteer een fiche</h1>

				<form className="admin-fiche__filter">
					<div className="admin-fiche__filter-search">
						<FaSearch />
						<input type="text" placeholder="Zoek op naam.."></input>
					</div>
				</form>

				<div className="admin-fiche__content">
					fiches
				</div>
				
			</div>
		</div>
	);
	
};

export default AdminFichePage;
