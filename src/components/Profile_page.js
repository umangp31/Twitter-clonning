import React from "react";
import "./Profile_page.css";
import Tweets from "./Tweets";

const Profile_page = () => {
  return (
    <div className="profile_page">
      <div className="profile_page_container">
        <div className="profile_page_title">
          {/* <img src="" alt="" className="title_back" /> */}
          <h3 className="title_user_name">Umang Patel</h3>
          <h6 className="title_no_of_tweets">7 Tweets</h6>
        </div>
        <div className="profile_page_profile">
          <div className="profile_bg_image"></div>
          <div className="profile_user_info">
            <div className="profile_user_img">
              <img
                src="https://cdn.lorem.space/images/face/.cache/150x150/stefan-stefancik-QXevDflbl8A-unsplash.jpg"
                alt=""
              />
            </div>
            <button className="edit_profile">Edit Profile</button>
          </div>

          <div className="profile_bio"></div>
        </div>
        <div className="profile_page_contents">tweets like media</div>
        <div className="profile_page_feed_tweets">
          <Tweets></Tweets>
        </div>
      </div>
    </div>
  );
};

export default Profile_page;
