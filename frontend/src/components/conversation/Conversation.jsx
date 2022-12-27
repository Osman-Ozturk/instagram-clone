import React from 'react'
import './conversation.scss'
import { Avatar } from '@mui/material'
const Conversation = () => {
  return (
    <div className='conversation'>
        <Avatar className='conversation-img' src='/images/person/2.png'/>
        <span className="conversation-name">Muhammet</span>
    </div>
  )
}

export default Conversation