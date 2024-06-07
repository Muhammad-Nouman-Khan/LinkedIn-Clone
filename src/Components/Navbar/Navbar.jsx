import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import search from "../../assets/search.svg";
import home from "../../assets/home.svg";
import network from "../../assets/network.svg";
import job from "../../assets/job.svg";
import message from "../../assets/message.svg";
import bell from "../../assets/bell.svg";
import profile from "../../assets/me.jpg";
import NavItem from "./NavItem";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase";
import { logout, selectUser } from "../../store/userSlice";
import { Avatar } from "@mui/material";
const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth
      .signOut()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };
  return (
    <div className="nav">
      <div className="navbar">
        <div className="nav__left">
          <img className="logoImg" src={logo} alt="" />
          <div className="search">
            <img className="searchImg" src={search} alt="" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="nav__right">
          <NavItem title="Home" image={home} />
          <NavItem title="My Network" image={network} />
          <NavItem title="Jobs" image={job} />
          <NavItem title="Messaging" image={message} />
          <NavItem title="Notifications" image={bell} />
          <div onClick={logoutOfApp} className="profilee">
            <Avatar
              style={{ height: "30px", width: "30px" }}
              src={user?.photoUrl}
              className="navProfile"
            >
              {user?.email[0]}
            </Avatar>
            <p>Me</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
