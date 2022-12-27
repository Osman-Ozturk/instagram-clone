import "./messenger.scss";
import React from "react";
import Conversation from "../../components/conversation/Conversation.jsx";
import Message from "../../components/message/Message.jsx";
import { Button } from "@mui/material";
import ChatOnline from "../../components/chatOnline/ChatOnline.jsx";

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <input className="chat-menu-input" placeholder="Search For Friends" />
          <Conversation />
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <Message />
          </div>
          <div className="chat-box-bottom">
            <textarea
              className="chat-message-input"
              placeholder="Write something..."
            ></textarea>
            <Button
              color="success"
              variant="contained"
              className="chat-submit-button"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className="chat-online">
        <div className="chat-online-wrapper">
        <h4>Online Users</h4>
                <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
