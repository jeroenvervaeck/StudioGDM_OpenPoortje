import { default as React } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import './kid.scss'

const Kid = ({firstname, lastname}) => {
  return (
    <div className="kid">
        {/* <img className="kid__profilepicture"></img> */}
		<FaUserAlt className="kid__profilepicture" />
		<div className="kid__wrapper">
			<div className="kid__wrapper-info">
				<h1>{firstname} {lastname}</h1>
				<p>age</p>
			</div>
			<p className="kid__wrapper-modified">modified at</p>
		</div>
    </div>
  );
};

export default Kid;
