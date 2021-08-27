import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAcountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import profile_image from '../images/profile_image.jpg'

import logo from '../images/linkedIn_logo.png';
import HeaderOption from './HeaderOption';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img  
                    className="linkedIn__logo"
                    src={logo}
                    alt="LinkedIn Logo"
                />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            
            <div className="header__right">

                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAcountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationIcon} title="Notifications"/>
                <HeaderOption avatar={profile_image} title="Profile" />

            </div>
        </div>
    )
}

export default Header

