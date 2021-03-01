import { default as React, useEffect, useState } from 'react';
import { useApi } from '../../services'; 

import { FaSearch, FaWrench, FaSortAlphaDown, FaSortNumericDown } from 'react-icons/fa';

import './SupervisorKidsPage.scss'

import { Kid } from '../../components'

const SupervisorKidsPage = () => {
	const { getKidsOfOrganisation } = useApi();
	const [ kids, setKids ] = useState();

	useEffect(() => {
		const fetchKids = async () => {
			const kidsResponse = await getKidsOfOrganisation();
			setKids(kidsResponse.kids)
			console.log(kidsResponse);
		}

		if (!kids || !kids.length) fetchKids() ;
	}, []);


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
				{
					(kids && kids.length)
					? kids.map((kid, index) => 
						<Kid 
							key={'kid-'+index}
							firstname={kid.first_name} 
							lastname={kid.last_name} 
							color={kid.theme_color}
							birthdate={kid.birth_date}
						/>
					)
					: <p>Hier zou een leuke loading animation moeten komen...</p>
				}
				
			</div>
		</div>
	);
	
};

export default SupervisorKidsPage;
