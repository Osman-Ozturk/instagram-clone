import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Avatar, Box } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo.jsx";
import { AuthContext } from "../../context/AuthContext";
import "./header.scss";

const Header = ({ handleOpen }) => {
  const { user } = useContext(AuthContext);
  console.log(user.profilePicture);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="header-wrapper">
      <div className="container">
        <div className="header">
          <Logo />
          <Box sx={{ position: "relative" }}>
            <div className="search">
              <SearchIcon className="search-icon" />
              <input type="text" placeholder="Search" />

              <div className="search-result-wrapper">
                <div className="search-result">
                  <Link to={"/profile/numan"} className="search-result-link">
                    <Avatar
                      src={user.profilePicture && PF + user.profilePicture}
                      sx={{ width: 28, height: 28 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1",
                        fontSize: "12px",
                      }}
                    >
                      <b>{user.username}</b>
                      <span>{user.fullName}</span>
                    </div>
                  </Link>
                  <Link to={"/profile/osman"} className="search-result-link">
                    <Avatar
                      src={user.profilePicture && PF + user.profilePicture}
                      sx={{ width: 28, height: 28 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1",
                        fontSize: "12px",
                      }}
                    >
                      <b>{user.username}</b>
                      <span>{user.fullName}</span>
                    </div>
                  </Link>
                  <Link to={"/profile/osman"} className="search-result-link">
                    <Avatar
                      src={user.profilePicture && PF + user.profilePicture}
                      sx={{ width: 28, height: 28 }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1",
                        fontSize: "12px",
                      }}
                    >
                      <b>{user.username}</b>
                      <span>{user.fullName}</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Box>
          <div className="header-links">
            <Link to="/">
              <HomeOutlinedIcon className="icon" />
            </Link>
            <Link to="/messenger">
              <ChatOutlinedIcon className="icon" />
            </Link>
            <AddBoxOutlinedIcon
              className="icon"
              style={{ cursor: "pointer" }}
              onClick={handleOpen}
            />
            <Link to="/profile/osman">
              <Avatar
                alt="Remy Sharp"
                src={user.profilePicture && PF + user.profilePicture}
                sx={{ width: 28, height: 28 }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
