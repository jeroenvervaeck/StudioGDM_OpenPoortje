import { default as React } from 'react';
import { FaTimes, FaPrint } from 'react-icons/fa';
import { fiche } from '../../assets'
import './fiche.scss'

const FicheDetail = ({ kid }) => {
  return (
    <div className="fiche-detail">
		  <div className="fiche-detail__main" style={{ background: 'url(' + fiche + ') center 120% no-repeat' }}>
        <FaTimes className="fiche-detail__main-close" onClick={ () => { console.log('close the popup') }} />
        <div className="fiche-detail__main-content">
          <div className="fiche-detail__main-content-label">
            <h1 className="fiche-detail__main-content-label-h1">Ervaringsdialoog</h1>
						<p>Ingevuld op 12/12/2021</p>
						<p>Begeleider: jeroen verver</p>
          </div>
          <div className="fiche-detail__main-content-buttons">
            {/* // WIP Bewerk buttons */}
            <FaPrint onClick={() => { console.log('print the fiche') }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheDetail;

