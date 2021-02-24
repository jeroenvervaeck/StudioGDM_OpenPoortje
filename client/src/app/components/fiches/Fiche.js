import { default as React } from 'react';
import { Link } from 'react-router-dom';

import './fiche.scss'

const Fiche = ({ name, route }) => {
  return (
    <Link className="fiche" to={route}>
		<p>{ name }</p>
    </Link>
  );
};

export default Fiche;

