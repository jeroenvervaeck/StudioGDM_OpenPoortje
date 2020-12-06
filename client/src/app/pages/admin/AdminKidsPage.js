import { default as React } from 'react';
import { FaSearch, FaWrench, FaSortAlphaDown, FaSortNumericDown } from 'react-icons/fa';

import './AdminKidsPage.scss'

import { Kid } from '../../components'

const AdminKidsPage = () => {
	return (
		<div className="admin-kids">
			<h1>Selecteer een kind</h1>

			<form className="admin-kids__filter">
				<div className="admin-kids__filter-search">
					<FaSearch />
					<input type="text" placeholder="Zoek op naam.."></input>
				</div>
				<div className="admin-kids__filter-icons">
					<FaWrench />
					<FaSortAlphaDown />
					<FaSortNumericDown />
				</div>
			</form>

			<div className="admin-kids__content">
				<Kid firstname="firstname" lastname="lastname" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
				<Kid firstname="jeroen" lastname="vervaeck" />
			</div>
		</div>
	);
	
};

export default AdminKidsPage;
