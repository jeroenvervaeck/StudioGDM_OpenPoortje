import { default as React } from 'react';
import { FaTrash } from 'react-icons/fa';

import './confirm.scss'

const Delete = ({}) => {
  return (
    <div className="delete">
		<FaTrash />
		<h1>Weet u zeker dat u gebruiker wilt verwijderen?</h1>
		<p>Het kind zal permanent uit de database verwijderd worden, dit kan niet ongedaan gemaakt worden.</p>
		<div className="delete__wrapper">
			<p>Behouden</p>
			<p>Verwijderen</p>
		</div>
    </div>
  );
};

export default Delete;
