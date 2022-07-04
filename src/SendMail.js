import React from "react";
import "./SendMail.css";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button, IconButton } from '@mui/material';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import AddLinkOutlinedIcon from '@mui/icons-material/AddLinkOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import SafetyCheckOutlinedIcon from '@mui/icons-material/SafetyCheckOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import firebase from "firebase";

function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail-close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
        {errors.to && <p className="sendMail-error">To is Required!</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail-error">Subject is Required!</p>
        )}
        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail-message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail-error">Message is Required!</p>
        )}
        <div className="sendMail-options">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="sendMail-send"
          >
            Send
          </Button>

        <IconButton>
        <FormatColorTextOutlinedIcon />
        </IconButton>

        <IconButton>
        <AttachmentOutlinedIcon />
        </IconButton>

        <IconButton>
        <AddLinkOutlinedIcon />
        </IconButton>

        <IconButton>
        <InsertEmoticonOutlinedIcon />
        </IconButton>

        <IconButton>
        <AddToDriveOutlinedIcon />
        </IconButton>

        <IconButton>
        <CollectionsOutlinedIcon />
        </IconButton>

        <IconButton>
        <SafetyCheckOutlinedIcon />
        </IconButton>

        <IconButton>
        <DriveFileRenameOutlineOutlinedIcon />
        </IconButton>           
       </div>
      </form>
    </div>
  );
}

export default SendMail;
