import React from "react";
import "./Mail.css";
import { IconButton } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import SnoozeOutlinedIcon from '@mui/icons-material/SnoozeOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import PrintIcon from '@mui/icons-material/Print';
import { useHistory } from "react-router-dom";
import { selectOpenMail } from "./features/mailSlice";
import { useSelector } from "react-redux";

function Mail() {
  const history = useHistory();

  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBackOutlinedIcon />
          </IconButton>

          <IconButton>
            <ReportGmailerrorredOutlinedIcon />
          </IconButton>

          <IconButton>
            <DeleteRoundedIcon />
          </IconButton>

          <IconButton>
            <MailOutlineRoundedIcon />
          </IconButton>

          <IconButton>
            <SnoozeOutlinedIcon />
          </IconButton>

          <IconButton>
            <TaskAltOutlinedIcon />
          </IconButton>

          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>

          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>

          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
        <div className="mail-toolsRight">
        <IconButton>
        <PrintIcon />
        </IconButton>

        <IconButton>
        <ArrowBackIosNewOutlinedIcon />
        </IconButton>

        <IconButton>
        <ArrowForwardIosOutlinedIcon />
        </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-bodyHeader">
          <div className="mail-subject">
            <h2>{selectedMail?.subject}</h2>
            <LabelOutlinedIcon
            className="mail-important" />
          </div>
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>

        <div className="mail-message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
