import { default as React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../../services';
import { Link, useHistory } from 'react-router-dom';
import * as Routes from '../../routes';
import { logo } from '../../assets';
import { PasswordCheck } from '../../components'; 

import './organisation.scss'

const OrganisationDashboardPage = () => {
	const history = useHistory();
	const { getLoggedInRole } = useAuth();
	const [ passwordCheckTarget, setPasswordCheckTarget ] = useState()
	return (
		<div className="organisation-dashboard">
			{
				(getLoggedInRole() !== 'organisation') 
				? <Redirect to={Routes.LOGIN_MAIN}/> 
				: null
			}

			{ 
				(passwordCheckTarget)
				? <PasswordCheck 
					role="organisation" 
					onClose={() => { setPasswordCheckTarget() }} 
					proceed={() => { history.push((passwordCheckTarget === 'kid') ? Routes.ORGANISATION_CRUD_KIDS : Routes.ORGANISATION_CRUD_SUPERVISOR) }} 
				/> 
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
					<div onClick={() => setPasswordCheckTarget('kid')}>
						<p>Kinderen</p>
					</div>
					<div onClick={() => setPasswordCheckTarget('supervisor')}>
						<p>Begeleider</p>
					</div>
				</div>
			</div>
		</div>
	);
	
};

export default OrganisationDashboardPage;
