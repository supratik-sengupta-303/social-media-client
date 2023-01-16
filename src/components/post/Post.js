import React from "react";
import Avatar from "../avatar/Avatar";
import backgroundImg from "../../assets/background.jpg";
import "./Post.scss";
import { AiOutlineHeart } from "react-icons/ai";

function Post({ post }) {
  return (
    <div className="Post">
      <div className="heading">
        <Avatar />
        <h4>Supratik Sengupta</h4>
      </div>
      <div className="content">
        <img src={backgroundImg} alt="content image" />
      </div>
      <div className="footer">
        <div className="like">
          <AiOutlineHeart className="icon" />
          <h4>4 likes</h4>
        </div>
        <p className="caption">
          This is nature Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Odit, qui!
        </p>
        <h6 className="time-ago">4 hours ago</h6>
      </div>
    </div>
  );
}

export default Post;
