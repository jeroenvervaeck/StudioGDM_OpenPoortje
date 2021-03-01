import { default as React, useEffect, useState } from 'react';
import { useAuth, useApi } from '../../services';
import { Link, Redirect } from 'react-router-dom';
import * as Routes from '../../routes';
import { FaPlus, FaTrash, FaRegEye, FaEdit, FaSearch } from 'react-icons/fa'
import { logo } from '../../assets';

import { Delete, AddChild, EditChild, ReadChild } from '../../components';

import './organisation.scss'

const OrganisationCRUDkidsPage = () => {
	const { getLoggedInRole } = useAuth();
	const { getKidsOfOrganisation, deleteKid } = useApi();

	const [ children, setChildren ] = useState();
	const [ selectedChildren, setSelectedChildren ] = useState();

	const [ childToEdit, setChildToEdit ] = useState(); 
	const [ childToRead, setChildToRead ] = useState(); 
	const [ childToDelete, setChildToDelete ] = useState(); 
	const [ addChildIsVisible, setAddChildIsVisible ] = useState(false); 

	useEffect(() => {
		const getKids = async  () => {
			const kids = await getKidsOfOrganisation('organisation');
			setSelectedChildren(kids.kids);
			setChildren(kids.kids);
		}
		if (!children || !children.length) getKids();
	}, [children]);

	const renderChildren = () => {
		return selectedChildren.map((kid, index) => {
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

	const onSearchChange = ( searchTerm ) => {
		if (searchTerm === '') setSelectedChildren(children);
		const results = children.filter((child) => 
			child.first_name.toLowerCase().includes(searchTerm.toLowerCase()) 
			|| 
			child.last_name.toLowerCase().includes(searchTerm.toLowerCase())
			||
			child.auth.username.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setSelectedChildren(results);
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
					person={childToDelete}
					onClose={() => setChildToDelete(false)}
					reload={() => setChildren()}
					onDelete={deleteKid}
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
					<input type="text" placeholder="Zoek op naam.." onChange={(e) => onSearchChange(e.target.value)}></input>
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
						(selectedChildren) 
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
