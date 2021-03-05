import { default as React, useEffect, useState } from 'react';
import { useApi, useAuth } from '../../services'; 
import { Link, Redirect } from 'react-router-dom';
import * as Routes from '../../routes';
import { useHistory } from 'react-router-dom'
import { loading } from '../../assets';

import { FaSearch, FaWrench, FaSortAlphaDown, FaSortNumericDown } from 'react-icons/fa';

import './SupervisorKidsPage.scss'

import { Kid } from '../../components'

const SupervisorKidsPage = () => {
	const { getKidsOfOrganisation, eraseCookie } = useApi();
	const { getLoggedInRole, getIsSupervisorLoggedIn } = useAuth();
	const history = useHistory(); 

	const [ children, setChildren ] = useState();
	const [ selectedChildren, setSelectedChildren ] = useState();

	useEffect(() => {
		const fetchKids = async () => {
			const kidsResponse = await getKidsOfOrganisation();
			setChildren(kidsResponse.kids)
			setSelectedChildren(kidsResponse.kids)
			console.log(kidsResponse);
		}

		if (!children || !children.length) fetchKids() ;
	}, []);

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
		<div className="supervisor-kids">
		{
			(getLoggedInRole() !== 'organisation') 
			? <Redirect to={Routes.LOGIN_MAIN}/> 
			: null
		}
		{
		  (!getIsSupervisorLoggedIn())
				? <Redirect to={Routes.LOGIN_SECONDARY}/> 
				: null
		}
			<Link className="supervisor-kids__nav" to={Routes.LOGIN_SECONDARY}
				onClick={(e) => {
					eraseCookie('sup-auth');
					history.push(Routes.LOGIN_SECONDARY);
				}}
			>
				<p>Uitloggen</p>
			</Link>

			<h1>Selecteer een kind</h1>

			<form className="supervisor-kids__filter">
				<div className="supervisor-kids__filter-search">
					<FaSearch />
					<input type="text" placeholder="Zoek op naam.." onChange={(e) => onSearchChange(e.target.value)}></input>
				</div>
				<div className="supervisor-kids__filter-icons">
					<FaWrench />
					<FaSortAlphaDown />
					<FaSortNumericDown />
				</div>
			</form>

			<div className="supervisor-kids__content">
				{
					(selectedChildren && selectedChildren.length)
					? selectedChildren.map((kid, index) => 
						<Kid 
							key={'kid-'+index}
							firstname={kid.first_name} 
							lastname={kid.last_name} 
							username={kid.auth.username}
							color={kid.theme_color}
							birthdate={kid.birth_date}
							skinTone={kid.skin_color}
							onSelect={() => {
								sessionStorage.setItem('selected-kid', JSON.stringify(kid));
								history.push(Routes.SUPERVISOR_DASHBOARD);
							}}
						/>
					)
					: <img className="supervisor-kids__content-loading" src={ loading }></img>
				}
				
			</div>
		</div>
	);
	
};

export default SupervisorKidsPage;
