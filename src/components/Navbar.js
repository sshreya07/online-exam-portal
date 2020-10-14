import React from 'react';
import logo from './logo.png';
import avatar from './yogocat_animation.gif';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="title"><img src={logo} alt="logo" id="logoImg"></img>&ensp;<span className="logo">EXAM PORTAL</span></div>
            <ul>
                <li><SearchIcon></SearchIcon></li>
                <li><NotificationsIcon></NotificationsIcon></li>
                <li>
                    <div id="avatar" className="title">
                        <img src={avatar} alt="avatar" id="avatarImg"></img>
                        <span className="logo" id="avatarText">
                            <div id="name" style={{letterSpacing:"0px", fontWeight:"normal", fontSize:"18px"}}>John Doe</div>
                            <div id="profession" style={{fontSize:"10px"}}>Student</div>
                        </span>&ensp;<ArrowDropDownOutlinedIcon></ArrowDropDownOutlinedIcon>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
