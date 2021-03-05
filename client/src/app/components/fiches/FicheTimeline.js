import { default as React } from 'react';
import { Link } from 'react-router-dom';

const FicheTimeline = ({ src }) => {
  return (
    <div className="supervisor-timeline__month-wrapper-element">
		<img src={ src }></img>
		<div className="supervisor-timeline__month-wrapper-element-label">
			<h1>Ervaringsdialoog</h1>
			<p>Ingevuld op 12/12/2021</p>
			<p>Begeleider: jeroen verver</p>
		</div>
	</div>
  );
};

export default FicheTimeline;

