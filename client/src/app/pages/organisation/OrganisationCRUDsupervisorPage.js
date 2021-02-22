import { default as React } from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import { FaPlus, FaTrash, FaRegEye, FaEdit, FaSearch } from 'react-icons/fa'
import { logo } from '../../assets';

import { Delete, AddSupervisor, EditSupervisor, ReadSupervisor } from '../../components';

import './organisation.scss'

const OrganisationCRUDsupervisorPage = () => {
	return (
		<div className="organisation-crud-supervisor">
			{ false  && <Delete /> }
			{ false  && <AddSupervisor /> }
			{ false  && <EditSupervisor /> }
			{ false  && <ReadSupervisor /> }
			<div className="organisation-crud-supervisor__top">
				<img src={ logo }></img>
				<h1>Begeleider</h1>
				<div className="organisation-crud-supervisor__top-search">
					<FaSearch />
					<input type="text" placeholder="Zoek op naam.."></input>
				</div>
			</div>
			<table className="organisation-crud-supervisor__table">
				<tbody>
					<tr>
						<th>Gebruikersnaam</th>
						<th>Voornaam</th>
						<th>Achternaam</th>
						<th>Bekijk</th>
						<th>Bewerk</th>
						<th>Wis</th>
					</tr>
					<tr>
						<td>jeroverv</td>
						<td>Jeroen</td>
						<td>Vervaeck</td>
						<td>
							<FaRegEye />
						</td>
						<td>
		 					<FaEdit />
						</td>
						<td>
							<FaTrash />
						</td>
					</tr>
				</tbody>
			</table>
			<div className="organisation-crud-supervisor__bottom">
				 <div className="organisation-crud-supervisor__bottom-btn">
					 <FaPlus />
					 <p>Begeleider toevoegen</p>
				 </div>
				 <Link to={ Routes.ORGANISATION_DASHBOARD } className="organisation-crud-supervisor__bottom-back">
					 <p>Keer terug</p>
				 </Link>
			</div>
		</div>
	);
	
};

export default OrganisationCRUDsupervisorPage;
