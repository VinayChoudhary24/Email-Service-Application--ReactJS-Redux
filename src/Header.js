import React from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, logout } from "./features/userSlice";
import { auth } from "./firebase.js";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };

  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon className='menu__icon'
          />
        </IconButton>
        <img
          src="https://cdn2.vectorstock.com/i/thumb-large/83/26/mail-arrow-up-logo-vector-20088326.jpg"
          alt=""
        />
        <h4>Mail</h4>
      </div>
      <div className="header-middle">
      <YoutubeSearchedForIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownCircleOutlinedIcon className="header-inputCaret" />
      </div>
      <div className="header-right">
      <IconButton>
      <AppsOutlinedIcon classname="apps__icon"/>
      </IconButton>
      <IconButton>
      <NotificationsNoneOutlinedIcon classname="notification__icon"/>
      </IconButton>
      <IconButton>
      <SettingsOutlinedIcon />
      </IconButton>
        <Avatar onClick={signOut} src={user?.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
