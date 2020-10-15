import React from 'react';
import logo from './logo.png';
import avatar from './yogocat_animation.gif';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { Button, Badge } from '@material-ui/core';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title"><img src={logo} alt="logo" id="logoImg"></img>&ensp;<span className="logo">EXAM PORTAL</span></div>
            <ul>
                <li><SearchIcon></SearchIcon></li>
                <li><Badge color="error" invisible="true" showZero="false" overlap="circle" badgeContent={6}></Badge><NotificationsIcon></NotificationsIcon></li>
                <li>
                    <div id="avatar" className="title">
                        <img src={avatar} alt="avatar" id="avatarImg"></img>
                        <span className="logo" id="avatarText">
                            <div id="name" style={{letterSpacing:"0px", fontWeight:"normal", fontSize:"16px"}}>John Doe</div>
                            <div id="profession" style={{fontSize:"10px"}}>Student</div>
                        </span>
                    </div>
                </li>
                <li>
                    <Button variant="outlined" color="white"><ExitToAppRoundedIcon></ExitToAppRoundedIcon>&ensp;Logout</Button>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
