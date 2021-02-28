import { default as React, useState } from 'react';
import { Link } from "react-router-dom";
import * as Routes from '../../routes';
import { FaBars, FaUserAlt, FaTimes, FaExchangeAlt, FaMountain, FaComments, FaFolder, FaBookmark, FaWrench, FaHome, FaInfo, FaBlog } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';

import './nav.scss'


const Nav = ({}) => {
  const [showNav, setShowNav] = useState(false);
  const onClick = () => setShowNav(!showNav);

  return (
    <div className="nav">
      { showNav ? 
          <div className="nav-block">
            <div className="nav-block__click-on-me" onClick={onClick}></div>
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
                  <Link to={Routes.LOGIN_SECONDARY}>
                    <HiOutlineLogout />
                  </Link>
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
                    <Link to={Routes.SUPERVISOR_KID}>
                      <FaExchangeAlt />
                    </Link>
                  </div>
              </div>
            </div>
            <div className="nav-block__routes">
              <div className="nav-block__routes-main">
                <div className="nav-block__routes-main-wrapper">
                  <Link to={Routes.Begeleidingslijn} className="nav-block__routes-main-wrapper-element">
                    <FaMountain size={20} />
                    <p>Berglijn</p>
                  </Link>
                  <Link to={Routes.Ervaringsdialoog} className="nav-block__routes-main-wrapper-element">
                    <FaComments size={20} />
                    <p>Dialoog</p>
                  </Link>
                </div>
                <Link to={Routes.SUPERVISOR_DASHBOARD} className="nav-block__routes-main-element">
                  <FaHome size={20} />
                  <p>Startpagina</p>
                </Link>
                <Link to={Routes.SUPERVISOR_FICHE} className="nav-block__routes-main-element">
                  <FaFolder size={20} />
                  <p>Fiches</p>
                </Link>
                <Link to={Routes.SUPERVISOR_TIMELINE} className="nav-block__routes-main-element">
                  <FaBookmark size={20} />
                  <p>Tijdlijn</p>
                </Link>
                <Link to={Routes.SUPERVISOR_SETTINGS} className="nav-block__routes-main-element">
                  <FaWrench size={20} />
                  <p>Instellingen</p>
                </Link>
                <Link to={Routes.SUPERVISOR_SETTINGS} className="nav-block__routes-main-element">
                  <FaInfo size={20} />
                  <p>Info</p>
                </Link>
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
