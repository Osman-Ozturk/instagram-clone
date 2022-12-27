import { Avatar } from '@mui/material'
import React from 'react'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import './post.scss'
function Post({top,bottom}) {
  return (
    <div className='post-wrapper'>
        {top && <div className="post-header">
        <div className="post-header-left">
                <a href="/">
                        <Avatar src="https://avatars.githubusercontent.com/u/60304291?v=4" sx={{width:32,height:32}}/>
                </a>
                <a href="/" className='profile-username'>
                        osmanozturk
                </a>
        </div>
        <div className="post-header-right">
              <button><MoreHorizOutlinedIcon /></button>  
        </div></div>
        }
        
        <div className="post-image">
                <img src="/images/post/1.png" alt="Post Img" />
        </div>
        {bottom && <div className="post-bottom">
                <div className="post-like">
                        <FavoriteOutlinedIcon className='post-like-icon active'/>
                </div>
                <div className="post-like-count">
                        <span>0 like</span>
                </div>
                <div className="post-content">
                        <a href='/' className='profile-username'>osmanozturk</a>{"  "}
                        <span className="post-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid adipisci libero magni asperiores nesciunt sapiente debitis, voluptatibus vel aperiam quas?</span>
                </div>
                <div className="post-time">1 dk önce</div>
        </div>}

    </div>
  )
}

export default Post