import { default as React } from 'react';

import './confirm.scss'

const Save = ({}) => {
  return (
    <div className="save">
		<h1 className="save__title">Weet je zeker dat je de fiche wil opslaan</h1>
		<div className="save__nav">
			<p className="save__nav-no">Neen</p>
			<p className="save__nav-yes">Ja</p>
		</div>
    </div>
  );
};

export default Save;
