import { default as React } from 'react';
import { useApi } from '../../services';
import { FaTrash } from 'react-icons/fa';

import './confirm.scss'

const Delete = ({kid, onClose, reload}) => {
  const { deleteKid, updateUserData } = useApi();

  return (
    <div className="delete">
		<FaTrash />
		<h1>Weet u zeker dat u kind {kid.first_name} {kid.last_name} ({kid.auth.username}) wilt verwijderen?</h1>
		<p>Het kind zal permanent uit de database verwijderd worden, dit kan niet ongedaan gemaakt worden.</p>
		<div className="delete__wrapper">
			<p onClick={ onClose }>Behouden</p>
			<p onClick={() => {
				deleteKid(kid._id)
				.then(reload)
				.then(onClose);
			}}>Verwijderen</p>
		</div>
    </div>
  );
};

export default Delete;
