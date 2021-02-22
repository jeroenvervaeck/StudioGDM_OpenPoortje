import { default as React, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth, useApi } from '../../services';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import { FaPlus, FaTrash, FaRegEye, FaEdit, FaSearch } from 'react-icons/fa'
import { logo } from '../../assets';

import { Delete, AddChild, EditChild, ReadChild } from '../../components';

import './organisation.scss'

const OrganisationCRUDkidsPage = () => {
	const { checkIsLoggedIn, getLoggedInRole } = useAuth();
	const { getKidsOfOrganisation } = useApi();

	const [ children, setChildren ] = useState();

	const [ childToEdit, setChildToEdit ] = useState(); 
	const [ childToRead, setChildToRead ] = useState(); 
	const [ childToDelete, setChildToDelete ] = useState(); 
	const [ addChildIsVisible, setAddChildIsVisible ] = useState(false); 

	useEffect(() => {
		const getKids = async  () => {
			const kids = await getKidsOfOrganisation('organisation');
			setChildren(kids.kids);
		}
		if (!children || !children.length) getKids();
	}, [children]);

	const renderChildren = () => {
		return children.map((kid, index) => {
			return(
				<tr key={"kid-"+index}>
					<td>{kid.auth.username}</td>
					<td>{kid.first_name}</td>
					<td>{kid.last_name}</td>
					<td>
						<FaRegEye 
							onClick={() => setChildToRead(kid)}
						/>
					</td>
					<td>
						<FaEdit 
							onClick={() => setChildToEdit(kid)}
						/>
					</td>
					<td>
						<FaTrash 
							onClick={() => setChildToDelete(kid)}
						/>
					</td>
				</tr>
			);
		});
	}

	return (
		<div className="organisation-crud-kids">
			{
				(getLoggedInRole() !== 'organisation') 
				? <Redirect to={Routes.LOGIN_MAIN}/> 
				: null
			}
			{ 
				childToDelete  && <Delete 
					kid={childToDelete}
					onClose={() => setChildToDelete(false)}
					reload={() => setChildren()}
				/> 
			}
			{ 
				addChildIsVisible  && <AddChild
					onClose={() => setAddChildIsVisible(false)}
					reload={() => setChildren()}
				/> 
			 }
			{ 
				childToEdit  && <EditChild
					kid={childToEdit}
					onClose={() => setChildToEdit(undefined)}
					reload={() => setChildren()}
				/> 
			}
			{ 
				childToRead  && <ReadChild 
					kid={childToRead}
					onClose={() => setChildToRead(undefined)}
				/> 
			}
			
			 <div className="organisation-crud-kids__top">
				<img src={ logo }></img>
				<h1>Kinderen</h1>
				<div className="organisation-crud-kids__top-search">
					<FaSearch />
					<input type="text" placeholder="Zoek op naam.."></input>
				</div>
			 </div>
			 <table className="organisation-crud-kids__table">
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
						(children) 
						? renderChildren()
						: null
					}
				</tbody>
			 </table>
			 <div className="organisation-crud-kids__bottom">
				 <div className="organisation-crud-kids__bottom-btn" onClick={() => setAddChildIsVisible(true)}>
					 <FaPlus />
					 <p>Kind toevoegen</p>
				 </div>
				 <Link to={ Routes.ORGANISATION_DASHBOARD } className="organisation-crud-kids__bottom-back">
					 <p>Keer terug</p>
				 </Link>
			 </div>
		</div>
	);
	
};

export default OrganisationCRUDkidsPage;
