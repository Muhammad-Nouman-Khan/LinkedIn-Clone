import React from "react";
import "./Sidebar.css";
import cover from "../../assets/cover.jpg";
import me from "../../assets/me.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { Avatar } from "@mui/material";
const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItem = (title) => {
    return (
      <div className="recentItem">
        <p>#</p>
        <p>{title}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="profile__images">
          <img className="cover__img" src={cover} alt="" />
          <Avatar src={user.photoUrl} className="profile__img">
            {user.email[0]}
          </Avatar>
        </div>
        <div className="profile__name">
          <p style={{ fontWeight: "bold" }}>{user.displayName}</p>
          <p style={{ fontWeight: "300", fontSize: "15px", color: "gray" }}>
            {user.email}
          </p>
        </div>
        <div className="profile__info">
          <div className="profile__views">
            <p style={{ fontWeight: "500", color: "#646464" }}>
              Profile viewers
            </p>
            <p style={{ color: "#2879C9", fontWeight: "bolder" }}>130</p>
          </div>
          <div className="post__impressions">
            <p style={{ fontWeight: "500", color: "#646464" }}>
              Post impressions
            </p>
            <p style={{ color: "#2879C9", fontWeight: "bolder" }}>575</p>
          </div>
        </div>
        <p
          className="saved__items"
          style={{ marginLeft: "10px", marginTop: "10px" }}
        >
          Saved items
        </p>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("JavaScript")}
        {recentItem(".NET Developers")}
        {recentItem("Software Developers")}
        {recentItem("Frontend")}
        {recentItem("React")}
        {recentItem("Engineers")}
        <p
          style={{
            textAlign: "center",
            borderTop: "1px solid gray",
            paddingTop: "10px",
          }}
        >
          Discover More
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
