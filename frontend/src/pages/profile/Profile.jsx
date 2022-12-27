import React from "react";
import { Avatar, Button } from "@mui/material";
import "./profile.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import GridOnOutlinedIcon from "@mui/icons-material/GridOnOutlined";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";

import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import Post from "../../components/post/Post.jsx";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";

function Profile({ top }) {
  return (
    <div className="container">
      <div className="profile-page">
        <div className="profile-head">
          <div className="profile-head-left">
            <Avatar
              alt="Remy Sharp"
              src="https://avatars.githubusercontent.com/u/60304291?v=4"
              sx={{ width: 150, height: 150 }}
            />
          </div>
          <div className="profile-head-right">
            <div className="head-right-top">
              <span className="profile-username">osmanozturk</span>
              <div className="profile-buttons">
                <Button variant="contained" size="small">
                  Edit
                </Button>
                <button>
                  <SettingsOutlinedIcon />
                </button>
                <button>
                  <LogoutOutlinedIcon color="error" />
                </button>
              </div>
            </div>
            <div className="head-right-center">
              <div className="post-count">
                <b>1</b>
                <span>posts</span>
              </div>
              <div className="follower-count">
                <b>4</b>
                <span>followers</span>
              </div>
              <div className="following-count">
                <b>1</b>
                <span>followings</span>
              </div>
            </div>
            <div className="head-right-bottom">
              <b>Osman Öztürk</b>
              <span>I m a Full Stack Developer</span>
            </div>
          </div>
        </div>

        <div className="profile-body">
          <div className="profile-nav-tabs">
            <button>
              <GridOnOutlinedIcon />
              <span>POSTS</span>
            </button>
            <button>
              <VideoLibraryOutlinedIcon />
              <span>VIDEOS</span>
            </button>
            <button>
              <BookmarkAddOutlinedIcon />
              <span>SAVE</span>
            </button>
            <button>
              <AccountBoxOutlinedIcon />
              <span>TAGGED</span>
            </button>
          </div>
          <div className="profile-post-grid">
            <div className="grid-post">
              <Post />
              <div className="like-icon-wrapper">
                <FavoriteSharpIcon className="like-icon"/>
                <b>1</b>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
