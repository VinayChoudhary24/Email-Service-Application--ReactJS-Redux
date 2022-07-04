import React, { useEffect, useState } from "react";
import "./EmailList.css";
import { Checkbox, IconButton } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AllInboxOutlinedIcon from '@mui/icons-material/AllInboxOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RestoreFromTrashOutlinedIcon from '@mui/icons-material/RestoreFromTrashOutlined';
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList({ emails }) {
  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
        <Checkbox />
        <IconButton>
        <ArrowDropDownOutlinedIcon 
        />
        </IconButton>
        <IconButton>
        <RestoreOutlinedIcon />
        </IconButton>
        <IconButton>
        <UnfoldMoreOutlinedIcon />
        </IconButton>
        </div>
        <div className="emailList-settingsRight">
        <IconButton>
          <ArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton>
          <ArrowRightOutlinedIcon />
          </IconButton>
          <IconButton>
          <AddTaskOutlinedIcon />
          </IconButton>
          <IconButton>
          <CalendarMonthOutlinedIcon />
          </IconButton>
          <IconButton>
          <SupportAgentOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList-sections">
      <Section Icon={AllInboxOutlinedIcon}title="Primary" color="red" selected />
      <Section Icon={PeopleAltOutlinedIcon} title="Social" color="lightblue" />
      <Section Icon={LocalOfferOutlinedIcon} title="Promotion" color="lightgreen" 
      />
      <Section Icon={RestoreFromTrashOutlinedIcon} title="Trash" color="tomato" />
      </div>

      <div className="emailList-list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Clone"
          subject="ReactJS"
          description="This is a DOPE"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
