import { default as React } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../services';
import { Link } from 'react-router-dom';
import * as Routes from '../../routes';
import { logo } from '../../assets';

import './organisation.scss'

const OrganisationDashboardPage = () => {
	const { getLoggedInRole } = useAuth();
	return (
		<div className="organisation-dashboard">
			{
				(getLoggedInRole() !== 'organisation') 
				? <Redirect to={Routes.LOGIN_MAIN}/> 
				: null
			}

			<div className="organisation-dashboard__top">
				<h1>Dashboard voor:</h1>
				<img src={logo}></img>
			</div>
			<div className="organisation-dashboard__main">
				<Link to={ Routes.LOGIN_SECONDARY }>
					<h1>Open Begeleidersomgeving</h1>
				</Link>
				<p>Dit zal ervoor zorgen dat de begeleider toegang krijgen tot de Kid-Ok-Kit</p>
			</div>
			<div className="organisation-dashboard__bottom">
				<h1>Kinderen of begeleiders beheren</h1>
				<div className="organisation-dashboard__bottom-wrapper">
					<Link to={ Routes.ORGANISATION_CRUD_KIDS }>
						<p>Kinderen</p>
					</Link>
					<Link to={ Routes.ORGANISATION_CRUD_SUPERVISOR }>
						<p>begeleiders</p>
					</Link>
				</div>
			</div>
		</div>
	);
	
};

export default OrganisationDashboardPage;
