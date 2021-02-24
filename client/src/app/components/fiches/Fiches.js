import { default as React, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { Fiche } from '../';
import * as Routes from '../../routes';

import './fiche.scss'

const Fiches = ({ catogerie, color }) => {
  const [show, setShow] = useState(false);
  const onClick = () => setShow(!show);

  return (
    <div className="fiches">
		<div className="fiches__main" style={{backgroundColor: color}} onClick={onClick}>
			<h1>{catogerie}</h1>
			{ show ? <FaAngleUp /> : <FaAngleDown /> }
		</div>
		{ show ?
			<div className="fiches__list">
				<Fiche name="Begeleidingslijn" route={Routes.SUPERVISOR_MOUNTAIN} />
				<Fiche name="Ervaringsdialoog" route={Routes.SUPERVISOR_DIALOG} />
			</div>
		 :
			undefined
		}

    </div>
  );
};

export default Fiches;

