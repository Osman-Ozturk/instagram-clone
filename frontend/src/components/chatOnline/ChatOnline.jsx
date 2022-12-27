import React from 'react'
import { Avatar } from '@mui/material'
import './chatOnline.scss'

const ChatOnline = () => {
  return (
    <div>
        
        <div className="chat-online-friends">
                <div className="chat-online-img-container">
                <Avatar src="/images/person/0.png" />
                <span className="chat-online-badge"></span>
                </div>
                <div className="chat-online-name">Numan</div>
        </div>
    </div>
  )
}

export default ChatOnline