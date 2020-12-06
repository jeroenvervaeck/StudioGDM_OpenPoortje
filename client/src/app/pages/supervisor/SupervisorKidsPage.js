import { default as React } from 'react';
import { FaSearch, FaWrench, FaSortAlphaDown, FaSortNumericDown } from 'react-icons/fa';

import './SupervisorKidsPage.scss'

import { Kid } from '../../components'

const SupervisorKidsPage = () => {
	return (
		<div className="supervisor-kids">
			<h1>Selecteer een kind</h1>

			<form className="supervisor-kids__filter">
				<div className="supervisor-kids__filter-search">
					<FaSearch />
					<input type="text" placeholder="Zoek op naam.."></input>
				</div>
				<div className="supervisor-kids__filter-icons">
					<FaWrench />
					<FaSortAlphaDown />
					<FaSortNumericDown />
				</div>
			</form>

			<div className="supervisor-kids__content">
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

export default SupervisorKidsPage;
