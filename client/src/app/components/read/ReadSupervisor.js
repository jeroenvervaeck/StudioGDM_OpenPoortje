import { default as React } from 'react';
import { logo } from '../../assets'

import './read.scss'

const ReadSupervisor = ({}) => {
  return (
    <div className="read-supervisor">
		<img src={logo}></img>
		<h1>Begeleider "Jeroen De begeleider"</h1>
		<p>begeleider bij Het Open Poortje.</p>
		<div className="read-supervisor__record">
			<h1>Voornaam</h1>
			<p>name</p>
		</div>
		<div className="read-supervisor__record">
			<h1>Familienaam</h1>
			<p>name</p>
		</div>
		<div className="read-supervisor__record">
			<h1>Organisatie</h1>
			<p>org</p>
		</div>
		<div className="read-supervisor__record">
			<h1>Begeleider sinds</h1>
			<p>date</p>
		</div>
		<h2 onClick={ () => console.log('make the component disapear') }>Klaar</h2>
    </div>
  );
};

export default ReadSupervisor;

