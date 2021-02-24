import { default as React } from 'react';
import { useApi } from '../../services';
import { FaTrash } from 'react-icons/fa';

import './confirm.scss'

const Delete = ({person, onClose, reload, onDelete}) => {
  const { deleteKid, updateUserData } = useApi();

  return (
    <div className="delete">
		<FaTrash />
		<h1>Weet u zeker dat u {person.first_name} {person.last_name} ({person.auth.username}) wilt verwijderen?</h1>
		<p>De data van deze persoon zal permanent uit de database verwijderd worden, dit kan niet ongedaan gemaakt worden.</p>
		<div className="delete__wrapper">
			<p onClick={ onClose }>Behouden</p>
			<p onClick={() => {
				onDelete(person._id)
				.then(reload)
				.then(onClose);
			}}>Verwijderen</p>
		</div>
    </div>
  );
};

export default Delete;
