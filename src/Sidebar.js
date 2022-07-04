import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PlagiarismOutlinedIcon from '@mui/icons-material/PlagiarismOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DuoOutlinedIcon from '@mui/icons-material/DuoOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SidebarOption from "./SidebarOption";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../../features/mailSlice";

function Sidebar({ emails }) {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar-compose"
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddOutlinedIcon />}
      >
        Compose
      </Button>
      <Link to="/" className="sidebar-link">
        <SidebarOption
          Icon={AllInboxOutlinedIcon}
          title="Inbox"
          number={emails.length}
          selected={true}
        />
      </Link>

      <SidebarOption Icon={StarOutlineOutlinedIcon} title="Starred" number={12} />
      <SidebarOption Icon={AccessTimeOutlinedIcon} title="Snoozed" number={9} />
      <SidebarOption Icon={SendOutlinedIcon} title="Sent" number={52} />
      <SidebarOption Icon={PlagiarismOutlinedIcon} title="Drafts" number={5}
      selected={true}
      />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title="More" 
      />

      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
             <IconButton>
        <PersonOutlineOutlinedIcon />
        </IconButton> 
        <IconButton>
        <DuoOutlinedIcon />
        </IconButton>
        <IconButton>
        <LocalPhoneOutlinedIcon />
        </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
