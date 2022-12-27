import React from "react";
import "./rightBox.scss";
import { Avatar , Button} from "@mui/material";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

function RightBox() {
  return (
    <div className="right-box">
      <div className="account">
        <a href="/">
          <Avatar
            src="https://avatars.githubusercontent.com/u/60304291?v=4"
            sx={{ width: 56, height: 56 }}
          />
        </a>
        <div className="account-titles">
          <a href="/">osmanozturk</a>
          <span>Osman Ozturk</span>
        </div>
      </div>
      <span className="friends-title">My Friends</span>
      <ul className="friends-list">
        <li className="friend-item">
          <div className="friend-item-left">
            <a href="/">
              <Avatar
                src="/images/person/2.png"
                sx={{ width: 40, height: 40 }}
              />
            </a>
            <div className="friend-username">
              <a href="*">numan</a>
              <span>Numan Öztürk</span>
              </div>
          </div>
          <div className="friend-item-right">
          <Button variant="contained" endIcon={<ArrowCircleRightOutlinedIcon />} size='small'>Go to profile</Button>

          </div>
        </li>
      </ul>
    </div>
  );
}

export default RightBox;
