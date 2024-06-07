import React, { forwardRef } from "react";
import { Avatar } from "@mui/material";
import "./Post.css";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";
import repost from "../../assets/repost.svg";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="actions">
        <div className="action">
          <img src={like} alt="" />
          <p>Like</p>
        </div>
        <div className="action">
          <img src={comment} alt="" />
          <p>Comment</p>
        </div>
        <div className="action">
          <img src={repost} alt="" />
          <p>Repost</p>
        </div>
        <div className="action">
          <img src={send} alt="" />
          <p>Send</p>
        </div>
      </div>
    </div>
  );
});

export default Post;
