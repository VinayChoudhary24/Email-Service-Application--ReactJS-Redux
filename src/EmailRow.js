import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from '@mui/material';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useHistory } from "react-router-dom";
import { selectMail } from "./features/mailSlice";
import { useDispatch } from "react-redux";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    history.push("/mail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow-options">
      <Checkbox />
        <IconButton>
        <StarOutlineOutlinedIcon />
        </IconButton>

        <IconButton>
        <DeleteForeverOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow-title">{title}</h3>
      <div className="emailRow-message">
        <h4>
          {subject}{" "}
          <span className="emailRow-description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
      <div className='emailrow__optionsright'>
        <IconButton>
        <ArchiveOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default EmailRow;
