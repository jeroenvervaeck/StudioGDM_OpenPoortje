import { default as React } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useApi } from '../../services'; 

import './kid.scss'

const Kid = ({firstname, lastname, birthdate, color, onSelect}) => {
	const { colors } = useApi();

	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}


	return (
		<div className="kid" onClick={onSelect}>
			{/* <img className="kid__profilepicture"></img> */}
			<FaUserAlt className="kid__profilepicture" style={{border: '2px solid '+ colors[color] || 'black'}}/>
			<div className="kid__wrapper">
				<div className="kid__wrapper-info">
					<h1>{firstname} {lastname}</h1>
					<p>age {calculateAge(new Date(birthdate), new Date())}</p>
				</div>
				{/* <p className="kid__wrapper-modified">modified at</p> */}
			</div>
		</div>
	);
};

export default Kid;
