import { default as React } from 'react';

import './SupervisorTimelinePage.scss';

import { Nav } from '../../components';
import { fiche } from '../../assets';

const SupervisorTimelinePage = () => {
	return (
		<div>
			<Nav />
			<div className="supervisor-timeline">
				<h1>Jouw tijdlijn</h1>
				<div className="supervisor-timeline__month">
					<h2>Month - Year</h2>
					<div className="supervisor-timeline__month-wrapper">
						<div className="supervisor-timeline__month-wrapper-element">
							<img src={fiche}></img>
							<div className="supervisor-timeline__month-wrapper-element-label">
								<h1>Ervaringsdialoog</h1>
								<p>Ingevuld op 12/12/2021</p>
								<p>Begeleider: jeroen verver</p>
							</div>
						</div>
						<div className="supervisor-timeline__month-wrapper-element">
							<img src={fiche}></img>
							<div className="supervisor-timeline__month-wrapper-element-label">
								<h1>Ervaringsdialoog</h1>
								<p>Ingevuld op 12/12/2021</p>
								<p>Begeleider: jeroen verver</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	
};

export default SupervisorTimelinePage;
