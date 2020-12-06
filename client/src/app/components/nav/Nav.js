import { default as React, useState } from 'react';
import { FaBars, FaUserAlt, FaTimes, FaExchangeAlt, FaMountain, FaComments, FaFolder, FaBookmark, FaWrench } from 'react-icons/fa';

import './nav.scss'


const Nav = ({}) => {
  const [showNav, setShowNav] = useState(true);
  const onClick = () => setShowNav(!showNav);

  return (
    <div className="nav">
      { showNav ? 
          <div className="nav-block">
            <div className="nav-block__credentials">
              <div className="nav-block__credentials-supervisor">
                <div className="nav-block__credentials-supervisor-title">
                  <h1>Begeleider</h1>
                  <FaTimes onClick={onClick} />
                </div>
                <div className="nav-block__credentials-supervisor-info">
                  <FaUserAlt />
                  <div className="nav-block__credentials-supervisor-info-wrapper">
                    <h2>Admin-user</h2>
                    <p>Admin-email</p>
                  </div>
                  {/* no show this icon */}
                  <FaExchangeAlt />
                </div>
              </div>
              <div className="nav-block__credentials-kid">
                <div className="nav-block__credentials-kid-title">
                    <h1>Kind</h1>
                  </div>
                  <div className="nav-block__credentials-kid-info">
                    <FaUserAlt />
                    <div className="nav-block__credentials-kid-info-wrapper">
                      <h2>Kind-user</h2>
                      <p>Kind-email</p>
                    </div>
                    <FaExchangeAlt />
                  </div>
              </div>
            </div>
            <div className="nav-block__routes">
              <div className="nav-block__routes-main">
                <div className="nav-block__routes-main-wrapper">
                  <div className="nav-block__routes-main-wrapper-element">
                    <FaMountain size={20} />
                    <p>Berglijn</p>
                  </div>
                  <div className="nav-block__routes-main-wrapper-element">
                    <FaComments size={20} />
                    <p>Dialoog</p>
                  </div>
                </div>
                <div className="nav-block__routes-main-element">
                  <FaFolder size={20} />
                  <p>Fiches</p>
                </div>
                <div className="nav-block__routes-main-element">
                  <FaBookmark size={20} />
                  <p>Tijdlijn</p>
                </div>
                <div className="nav-block__routes-main-element">
                  <FaWrench size={20} />
                  <p>Instellingen</p>
                </div>
              </div>
              <div className="nav-block__routes-logout">
                <p>Uitloggen</p>
              </div>
            </div>
          </div>
        : 
          <div className="nav-none" onClick={onClick}>
            <FaBars size={25} />
            <div className="nav-none__wrapper">
              <FaUserAlt />
              <FaUserAlt />
            </div>
          </div>
      }
    </div>
  );
};

export default Nav;
