import { default as React } from 'react';
import { FaTimes, FaPrint } from 'react-icons/fa';
import { fiche } from '../../assets'
import './fiche.scss'

const FicheDetail = ({ imgSrc, date, onClose, name }) => {
  return (
    <div className="fiche-detail">
		  <div className="fiche-detail__main" style={{ background: 'url(' + imgSrc + ') center 120% no-repeat' }}>
        <FaTimes className="fiche-detail__main-close" onClick={ onClose } />
        <div className="fiche-detail__main-content">
          <div className="fiche-detail__main-content-label">
            <h1 className="fiche-detail__main-content-label-h1">{name}</h1>
						<p>Ingevuld op {new Date(date).getDate()}-{new Date(date).getMonth()}-{new Date(date).getFullYear()}</p>
						{/* <p>Begeleider: jeroen verver</p> */}
          </div>
          <div className="fiche-detail__main-content-buttons">
            {/* // WIP Bewerk buttons */}
            <FaPrint onClick={async () => { 
              const element = document.createElement('a');
              element.setAttribute('href', imgSrc);
              element.setAttribute('download', `${name}-${new Date(date).getDate()}-${new Date(date).getMonth()}-${new Date(date).getFullYear()}.png`);

              element.style.display = 'none';
              document.body.appendChild(element);

              element.click();

              document.body.removeChild(element);
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheDetail;

