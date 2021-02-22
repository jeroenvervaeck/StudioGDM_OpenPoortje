import { default as React, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth, useApi } from '../../services';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import { FaPlus, FaTrash, FaRegEye, FaEdit, FaSearch } from 'react-icons/fa'
import { logo } from '../../assets';

import { Delete, AddSupervisor, EditSupervisor, ReadSupervisor } from '../../components';

import './organisation.scss'

const OrganisationCRUDsupervisorPage = () => {

	const { checkIsLoggedIn, getLoggedInRole } = useAuth();
	const { getSupervisorsOfOrganisation } = useApi();

	const [ supervisors, setSupervisors ] = useState();

	const [ supervisorToEdit, setSupervisorToEdit ] = useState(); 
	const [ supervisorToRead, setSupervisorToRead ] = useState(); 
	const [ supervisorToDelete, setSupervisorToDelete ] = useState(); 
	const [ addSupervisorIsVisible, setAddSupervisorIsVisible ] = useState(false); 

	useEffect(() => {
		const getSupervisors = async  () => {
			const supervisors = await getSupervisorsOfOrganisation();
			setSupervisors(supervisors.supervisors);
		}
		console.log(supervisors)
		if (!supervisors || !supervisors.length) getSupervisors();
	});

	const renderSupervisors = () => {
		return supervisors.map((supervisor, index) => {
			return(
				<tr key={"supervisor-"+index}>
					<td>{supervisor.auth.username}</td>
					<td>{supervisor.first_name}</td>
					<td>{supervisor.last_name}</td>
					<td>
						<FaRegEye 
							onClick={() => setSupervisorToRead(supervisor)}
						/>
					</td>
					<td>
						<FaEdit 
							onClick={() => setSupervisorToEdit(supervisor)}
						/>
					</td>
					<td>
						<FaTrash 
							onClick={() => setSupervisorToDelete(supervisor)}
						/>
					</td>
				</tr>
			);
		});
	}

	return (
		<div className="organisation-crud-supervisor">

			{
				(!checkIsLoggedIn() || getLoggedInRole() !== 'organisation') 
				? <Redirect to={Routes.LOGIN_MAIN}/> 
				: null
			}
			{ 
				supervisorToDelete  && <Delete 
					kid={supervisorToDelete}
					onClose={() => setSupervisorToDelete()}
					reload={() => setSupervisors()}
				/> 
			}
			{ 
				addSupervisorIsVisible  && <AddSupervisor
					onClose={() => setAddSupervisorIsVisible(false)}
					reload={() => setSupervisors()}
				/> 
			 }
			{ 
				supervisorToEdit  && <EditSupervisor
					kid={supervisorToEdit}
					onClose={() => setSupervisorToEdit(undefined)}
					reload={() => setSupervisors()}
				/> 
			}
			{ 
				supervisorToRead  && <ReadSupervisor
					supervisor={supervisorToRead}
					onClose={() => setSupervisorToRead(undefined)}
				/> 
			}
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
					{
						(supervisors)
						? renderSupervisors()
						: null
					}
				</tbody>
			</table>
			<div className="organisation-crud-supervisor__bottom">
				 <div className="organisation-crud-supervisor__bottom-btn" onClick={() => setAddSupervisorIsVisible(true)}>
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
