import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import uber from "../../assets/uber.jpeg";
import google from "../../assets/google.jpeg";
import amazon from "../../assets/amazon.jpeg";

const Widgets = () => {
  const follow = (name, imgURL) => {
    return (
      <div className="widgets__article">
        <img src={imgURL} alt="" />
        <div className="follow__company">
          <h4>{name}</h4>
          <button className="follow__btn">Follow</button>
        </div>
      </div>
    );
  };
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>
      {follow("Uber", uber)}
      {follow("Google", google)}
      {follow("Amazon", amazon)}
    </div>
  );
};

export default Widgets;
