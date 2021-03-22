import { default as React, useState } from 'react';
import { FaTimes, FaPrint } from 'react-icons/fa';
import { fiche } from '../../assets';
import { useApi } from '../../services'; 
import './fiche.scss'

const FicheDetail = ({ imgSrc, date, onClose, name }) => {
  const { colors } = useApi();
  const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')));

  return (
    <div className="fiche-detail">
		  <div className="fiche-detail__main" style={{ background: 'url(' + imgSrc + ') center 100% no-repeat' }}>
        <FaTimes className="fiche-detail__main-close" onClick={ onClose } />
        <div className="fiche-detail__main-content">
          <div className="fiche-detail__main-content-label">
            <h1 className="fiche-detail__main-content-label-h1" style={{color: colors[(kid) ? kid.theme_color : 'color-01']}}>{name}</h1>
						<p>Ingevuld op {new Date(date).getDate()}-{new Date(date).getMonth()+1}-{new Date(date).getFullYear()}</p>
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

