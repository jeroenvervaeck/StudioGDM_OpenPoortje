import { default as React, useState } from 'react';
import { SwingMainpage } from '../../assets';
import { useApi } from '../../services'; 

import './SupervisorDashboardPage.scss';

import { Nav } from '../../components';

const SupervisorDashboardPage = () => {
	const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')));
	const { colors } = useApi();

	return (
		<div>
			<Nav />
			<div className="supervisor-dashboard">
				<h1>Welkom bij de Kid-ok Kit</h1>
				<div className="supervisor-dashboard-image">
					<div className="supervisor-dashboard-image-textballoon">
						<div className="supervisor-dashboard-image-textballoon-for_png">
							<p>Hallo,</p>
							<h1 style={{color: colors[(kid) ? kid.theme_color : 'color-01']}}>
								{kid.first_name}
							</h1>
						</div>
					</div>
					<img src={ SwingMainpage }></img>
				</div>
			</div>
		</div>
	);
	
};

export default SupervisorDashboardPage;
