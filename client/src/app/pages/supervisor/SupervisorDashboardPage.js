import { default as React, useState } from 'react';
import { SwingMainpage01, SwingMainpage02, SwingMainpage03, SwingMainpage04 } from '../../assets';
import { useApi } from '../../services'; 

import './SupervisorDashboardPage.scss';

import { Nav } from '../../components';

const SupervisorDashboardPage = () => {
	const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')));
	const { colors } = useApi();

	const pickImage = (kid) => {
		if ( kid.skin_color === 'skin-01' ) { return SwingMainpage01 } 
		else if ( kid.skin_color === 'skin-02' ) { return SwingMainpage02 }
		else if ( kid.skin_color === 'skin-03' ) { return SwingMainpage03 }
		else { return SwingMainpage04 }
 	}

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

					<img src={ pickImage(kid) }></img>
				</div>
			</div>
		</div>
	);
	
};

export default SupervisorDashboardPage;
