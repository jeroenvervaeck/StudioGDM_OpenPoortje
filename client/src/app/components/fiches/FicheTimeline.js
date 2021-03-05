import { default as React } from 'react';
import { Link } from 'react-router-dom';

const FicheTimeline = ({ imgSrc, date, onClick, name }) => {
  return (
    <div className="supervisor-timeline__month-wrapper-element" onClick={onClick}>
		{
			(imgSrc) ? <img src={ imgSrc }></img> : <p>Geen afbeelding beschikbaar</p>
		}
		<div className="supervisor-timeline__month-wrapper-element-label">
			<h1>{name}</h1>
			<p>Ingevuld op {new Date(date).getDate()}-{new Date(date).getMonth()}-{new Date(date).getFullYear()}</p>
			{/* <p>Begeleider: jeroen verver</p> */}
		</div>
	</div>
  );
};

export default FicheTimeline;

