import React from "react";
import "./components.css";
import comment_user_1 from "../assets/coments_user_icon_1.svg";

function Comments() {
  return (
    <div className="comment-section flex container">
      <h2>What is our guardian say</h2>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting <br />{" "}
        industry. Lorem Ipsum has been the industry's standard dummy
      </span>
      <div className="comment-container flex">
        <div className="comment-card flex">
          <div className="comment-profile flex align">
            <img src={comment_user_1} alt="" />
            <div className="comments-profile-title">
              <h3>Winifred Paul</h3>
              <span>Student Guardian</span>
            </div>
          </div>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
          </span>
          <h4>Written 2022</h4>
        </div>
        <div className="comment-card flex">
          <div className="comment-profile flex align">
            <img src={comment_user_1} alt="" />
            <div className="comments-profile-title">
              <h3>Winifred Paul</h3>
              <span>Student Guardian</span>
            </div>
          </div>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy
          </span>
          <h4>Written 2022</h4>
        </div>
      </div>
    </div>
  );
}

export default Comments;
