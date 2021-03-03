import { default as React } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useApi } from '../../services'; 

import './kid.scss'
import profile_01 from '../../assets/profileGifs/profile_01.gif'
import profile_02 from '../../assets/profileGifs/profile_02.gif'
import profile_03 from '../../assets/profileGifs/profile_03.gif'
import profile_04 from '../../assets/profileGifs/profile_04.gif'

const Kid = ({firstname, lastname, username, birthdate, color, onSelect, skinTone}) => {
	const { colors } = useApi();

	function calculateAge(birthday) { // birthday is a date
		var ageDifMs = Date.now() - birthday.getTime();
		var ageDate = new Date(ageDifMs); // miliseconds from epoch
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	const profiles = [profile_01, profile_02, profile_03, profile_04];
	const profileGif = profiles[+skinTone.replace('skin-', '')-1];

	return (
		<div className="kid" onClick={onSelect}>
			{/* <img className="kid__profilepicture"></img> */}
			<img src={profileGif} className="kid__profilepicture" style={{border: '4px solid '+ colors[color] || 'black'}}/>
			{/* <FaUserAlt className="kid__profilepicture" style={{border: '4px solid '+ colors[color] || 'black'}}/> */}
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
