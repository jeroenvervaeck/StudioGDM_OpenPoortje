import { default as React } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useApi } from '../../services'; 

import './kid.scss'

const Kid = ({firstname, lastname, username, birthdate, color, onSelect}) => {

	const { colors } = useApi();

	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}


	return (
		<div className="kid" onClick={onSelect}>
			{/* <img className="kid__profilepicture"></img> */}
			<FaUserAlt className="kid__profilepicture" style={{border: '4px solid '+ colors[color] || 'black'}}/>
			<div className="kid__wrapper">
				<h1>{firstname} {lastname}</h1>
				<p>{username}</p>
				<p>{calculateAge(new Date(birthdate), new Date()) } jaar</p>
				{/* <p className="kid__wrapper-modified">modified at</p> */}
			</div>
		</div>
	);
};

export default Kid;
