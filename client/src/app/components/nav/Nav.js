import { default as React, useEffect, useState } from 'react';
import { FaBars, FaUserAlt, FaTimes, FaExchangeAlt, FaMountain, FaComments, FaFolder, FaBookmark, FaWrench, FaHome, FaInfo, FaBlog } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { useApi, useAuth } from '../../services'; 
import { Link, Redirect, NavLink, useHistory } from 'react-router-dom';
import * as Routes from '../../routes';
import { PasswordCheck } from '../';

import './nav.scss'

import { logo } from '../../assets/index';
import profile_01 from '../../assets/profileGifs/profile_01.gif';
import profile_02 from '../../assets/profileGifs/profile_02.gif';
import profile_03 from '../../assets/profileGifs/profile_03.gif';
import profile_04 from '../../assets/profileGifs/profile_04.gif';


const Nav = ({}) => {
  const history = useHistory();
	const { getLoggedInRole, getIsSupervisorLoggedIn, logoutSupervisor } = useAuth();
	const { eraseCookie,colors } = useApi();
  const [showNav, setShowNav] = useState(false);
  const onClick = () => setShowNav(!showNav);

  const [ passwordCheckVisible, setPasswordCheckVisible ] = useState(false)

	const profiles = [profile_01, profile_02, profile_03, profile_04];

  const [ supervisor, setSupervisor ] = useState(JSON.parse(sessionStorage.getItem('supervisor')));
  const [ kid, setKid ] = useState(JSON.parse(sessionStorage.getItem('selected-kid')));
  const [ profilePic, setProfileKid ] = useState();

  useEffect(() => {
    setProfileKid(profiles[+kid.skin_color.replace('skin-', '')-1]);
  }, [kid]);


  const deselectKid = () => {
    sessionStorage.removeItem('selected-kid');
    history.push(Routes.SUPERVISOR_KID);
  }

  return (
    <div className="nav">
    
    { passwordCheckVisible && <PasswordCheck role="supervisor" onClose={() => { setPasswordCheckVisible(false) }} proceed={() => { deselectKid() }} /> }

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
          <div className="nav-block" style={{backgroundColor: colors[(kid) ? kid.theme_color : 'color-01']}}>
            <div className="nav-block__credentials">
              <div className="nav-block__credentials-supervisor">
                <div className="nav-block__credentials-supervisor-title">
                  <h1>Begeleider</h1>
                  <FaTimes onClick={onClick} />
                </div>
                <div className="nav-block__credentials-supervisor-info">
                  <div className="nav-block__credentials-supervisor-info-profile">
                    <div className="nav-block__credentials-supervisor-info-profile-online"></div>
                    {/* <FaUserAlt /> */}
                    <img src={ logo }></img>
                  </div>
                  <div className="nav-block__credentials-supervisor-info-wrapper">
                    <h2>{(supervisor) ? supervisor.first_name: 'Begeleider naam'} </h2>
                    <p>{(supervisor) ? supervisor.auth.username: 'Gebruikersnaam'}</p>
                  </div>
                  <Link to={Routes.LOGIN_SECONDARY} onClick={logoutSupervisor}>
                    <HiOutlineLogout />
                  </Link>
                </div>
              </div>
              <div className="nav-block__credentials-kid">
                <div className="nav-block__credentials-kid-title">
                    <h1>Kind</h1>
                  </div>
                  <div className="nav-block__credentials-kid-info">
                    {/* <FaUserAlt /> */}
                    <img className="nav-block__credentials-kid-info-profile" src={(kid) ? profilePic : '.......'}/>
                    <div className="nav-block__credentials-kid-info-wrapper">
                    <h2>{(kid) ? kid.first_name: 'Kind naam'} </h2>
                    <p>{(kid && kid.auth) ? kid.auth.username: 'Gebruikersnaam'}</p>
                    </div>
                    <div onClick={() => { setPasswordCheckVisible(true) }}>
                      <FaExchangeAlt />
                    </div>
                  </div>
              </div>
            </div>
            <div className="nav-block__routes">
              <div className="nav-block__routes-main">
                <div className="nav-block__routes-main-wrapper">
                  <NavLink to={Routes.SUPERVISOR_MOUNTAIN} className="nav-block__routes-main-wrapper-element" activeClassName="nav-block__routes-main-element-selected">
                    <FaMountain size={20} />
                    <p>Berglijn</p>
                  </NavLink>
                  <NavLink to={Routes.SUPERVISOR_DIALOG} className="nav-block__routes-main-wrapper-element" activeClassName="nav-block__routes-main-element-selected">
                    <FaComments size={20} />
                    <p>Dialoog</p>
                  </NavLink>
                </div>
                <NavLink to={Routes.SUPERVISOR_DASHBOARD} className="nav-block__routes-main-element" activeClassName="nav-block__routes-main-element-selected">
                  <FaHome size={20} />
                  <p>Startpagina</p>
                </NavLink>
                <NavLink to={Routes.SUPERVISOR_FICHE} className="nav-block__routes-main-element" activeClassName="nav-block__routes-main-element-selected">
                  <FaFolder size={20} />
                  <p>Fiches</p>
                </NavLink>
                <NavLink to={Routes.SUPERVISOR_TIMELINE} className="nav-block__routes-main-element" activeClassName="nav-block__routes-main-element-selected">
                  <FaBookmark size={20} />
                  <p>Tijdlijn</p>
                </NavLink>
                <NavLink to={Routes.SUPERVISOR_SETTINGS} className="nav-block__routes-main-element" activeClassName="nav-block__routes-main-element-selected">
                  <FaWrench size={20} />
                  <p>Instellingen</p>
                </NavLink>
                <NavLink to={Routes.SUPERVISOR_INFO} className="nav-block__routes-main-element" activeClassName="nav-block__routes-main-element-selected">
                  <FaInfo size={20} />
                  <p>Info</p>
                </NavLink>
              </div>
            </div>
            <div className="nav-block__click-on-me" onClick={onClick}></div>
          </div>
        : 
          <div className="nav-none" style={{backgroundColor: colors[(kid) ? kid.theme_color : 'color-01']}} onClick={onClick}>
            <FaBars size={25} />
            <div className="nav-none__wrapper">
              <div className="nav-none__wrapper-profile">
                <div className="nav-none__wrapper-profile-online"></div>
                {/* <FaUserAlt /> */}
                <img src={ logo }></img>
              </div>
              <img className="nav-none__wrapper-kid" src={(kid) ? profilePic : '.......'}/>
            </div>
          </div>
      }
    </div>
  );
};

export default Nav;
