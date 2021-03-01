import { default as React, useState } from 'react';
import { FaBars, FaUserAlt, FaTimes, FaExchangeAlt, FaMountain, FaComments, FaFolder, FaBookmark, FaWrench, FaHome, FaInfo, FaBlog } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { useApi, useAuth } from '../../services'; 
import { Link, Redirect } from 'react-router-dom';
import * as Routes from '../../routes';
import { useHistory } from 'react-router-dom'

import './nav.scss'


const Nav = ({}) => {
	const { getLoggedInRole, getIsSupervisorLoggedIn } = useAuth();
	const { eraseCookie,colors } = useApi();
  const [showNav, setShowNav] = useState(false);
  const onClick = () => setShowNav(!showNav);

  const [ supervisor, setSupervisor ] = useState(JSON.parse(sessionStorage.getItem('supervisor')).supervisor);
  const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')));

  const logOutSupervisor = () => {
    sessionStorage.removeItem('supervisor');
    eraseCookie('sup-auth');
  }

  const deselectKid = () => {
    sessionStorage.removeItem('selected-kid')
  }

  return (
    <div className="nav">
		{
			(getLoggedInRole() !== 'organisation') 
			? <Redirect to={Routes.LOGIN_MAIN}/> 
			: null
		}
    {
      (!getIsSupervisorLoggedIn())
			? <Redirect to={Routes.LOGIN_SECONDARY}/> 
			: null
    }
    {
      (!JSON.parse(sessionStorage.getItem('selected-kid')))
			? <Redirect to={Routes.SUPERVISOR_KID}/> 
			: null
    }
      { showNav ? 
          <div className="nav-block" style={{backgroundColor: colors[kid.theme_color]}}>
            <div className="nav-block__credentials">
              <div className="nav-block__credentials-supervisor">
                <div className="nav-block__credentials-supervisor-title">
                  <h1>Begeleider</h1>
                  <FaTimes onClick={onClick} />
                </div>
                <div className="nav-block__credentials-supervisor-info">
                  <FaUserAlt />
                  <div className="nav-block__credentials-supervisor-info-wrapper">
                    <h2>{(supervisor) ? supervisor.first_name: 'Begeleider naam'} </h2>
                    <p>{(supervisor) ? supervisor.auth.username: 'Gebruikersnaam'}</p>
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
                    <h2>{(kid) ? kid.first_name: 'Kind naam'} </h2>
                    <p>{(kid) ? kid.auth.username: 'Gebruikersnaam'}</p>
                    </div>
                    <Link to={Routes.SUPERVISOR_KID} onClick={deselectKid}>
                      <FaExchangeAlt />
                    </Link>
                  </div>
              </div>
            </div>
            <div className="nav-block__routes">
              <div className="nav-block__routes-main">
                <div className="nav-block__routes-main-wrapper">
                  <Link to={Routes.SUPERVISOR_BERGGESPREK} className="nav-block__routes-main-wrapper-element">
                    <FaMountain size={20} />
                    <p>Berglijn</p>
                  </Link>
                  <Link to={Routes.SUPERVISOR_DIALOG} className="nav-block__routes-main-wrapper-element">
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
            <div className="nav-block__click-on-me" onClick={onClick}></div>
          </div>
        : 
          <div className="nav-none" style={{backgroundColor: colors[kid.theme_color]}} onClick={onClick}>
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
