import { default as React } from 'react';
import { logo } from '../../assets'

import './read.scss'

const ReadChild = ({kid, onClose}) => {
  return (
    <div className="read-child">
		<img src={logo}></img>
		<h1>Kind “Elisa Marenbroeck”</h1>
		<p>Kind bij Het Open Poortje.</p>
		<div className="read-child__record">
			<h1>Voornaam</h1>
			<p>{kid.first_name}</p>
		</div>
		<div className="read-child__record">
			<h1>Familienaam</h1>
			<p>{kid.last_name}</p>
		</div>
		{/*
 		<div className="read-child__record">
			<h1>Adres</h1>
			<p>Wordt Nog niet opgeslaan</p>
		</div>
		<div className="read-child__record">
			<h1>Begeleider</h1>
			<p>jeroen de begeleider</p>
		</div>
		*/}
		<div className="read-child__record-color">
			<h1>Huidskleur</h1>
			<div style={{backgroundColor: kid.skin_color}}></div>
		</div>
		<div className="read-child__record-color">
			<h1>Themakleur</h1>
			<div style={{backgroundColor: kid.theme_color}}></div>
		</div>
		<h2 onClick={ onClose }>Klaar</h2>
    </div>
  );
};

export default ReadChild;

