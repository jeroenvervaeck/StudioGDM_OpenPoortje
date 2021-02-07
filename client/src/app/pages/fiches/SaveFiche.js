import { default as React } from 'react';
import { FaCheck } from 'react-icons/fa';

import './fiches.scss'

const SaveFiche = () => {
	return (
		<div className="save-fiche">
			<FaCheck size={60} />
			<h1 className="save-fiche__title">De fiche is correct opgeslagen</h1>
			<p className="save-fiche__nav">Terug naar hoofdmenu</p>
		</div>
	);
};

export default SaveFiche;
