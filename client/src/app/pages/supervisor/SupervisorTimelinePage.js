import { default as React, useState } from 'react';

import './SupervisorTimelinePage.scss';

import { Nav, FicheTimeline, FicheDetail } from '../../components';
import { fiche } from '../../assets';

const SupervisorTimelinePage = () => {
	return (
		<div>
			<Nav />
			<div className="supervisor-timeline">

				{ 
					true && <FicheDetail 
						
					/> 
				}

				<h1>Jouw tijdlijn</h1>
				<div className="supervisor-timeline__month">
					<h2>Month - Year</h2>
					<div className="supervisor-timeline__month-wrapper">
						<FicheTimeline src={fiche} />
						<FicheTimeline src={fiche} />
						<FicheTimeline src={fiche} />
					</div>
				</div>
			</div>
		</div>
	);
	
};

export default SupervisorTimelinePage;
