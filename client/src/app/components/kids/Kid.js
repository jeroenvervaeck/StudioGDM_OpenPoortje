import { default as React } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import './kid.scss'

const Kid = ({firstname, lastname, age, color}) => {
  return (
    <div className="kid">
        {/* <img className="kid__profilepicture"></img> */}
		<FaUserAlt className="kid__profilepicture" style={{border: '2px solid '+ color || 'black'}}/>
		<div className="kid__wrapper">
			<div className="kid__wrapper-info">
				<h1>{firstname} {lastname}</h1>
				<p>age {age}</p>
			</div>
			<p className="kid__wrapper-modified">modified at</p>
		</div>
    </div>
  );
};

export default Kid;
