import { default as React } from 'react';

import './confirm.scss'

const Save = ({showState, action}) => {

  return (
	<div> 
		{showState==true && 
		<div className="save">
			<h1 className="save__title">Weet je zeker dat je de fiche wil opslaan</h1>
			<div className="save__nav">
				<p className="save__nav-no" onClick={action} >Neen</p>
				<p className="save__nav-yes">Ja</p>
			</div>
		</div>
		}
	</div> 
  );
};

export default Save;
