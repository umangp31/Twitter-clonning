import "./Profile_page.css";
import Tweets from "./Tweets";

const Profile_page = () => {
  return (
    <div className="profile_page">
      <div className="profile_page_container">
        <div className="profile_page_title">
          <div className="iconbutton">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244);" }}><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg></div>
          {/* <img src="" alt="" className="title_back" /> */}
          {/* <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style="color: rgb(239, 243, 244);"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg> */}
          {/* <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style="color: rgb(239, 243, 244);"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg> */}
          <div className="heder_user_info">
            <h3 className="title_user_name">Umang Patel</h3>
            <h6 className="title_no_of_tweets">7 Tweets</h6>
          </div>
        </div>

        <div className="profile_page_profile">
          <div className="profile_bg_image"></div>
          <div className="profile_page_profile_body">
            <div className="profile_user_info">
              <div className="profile_user_img">
                <img
                  src="https://cdn.lorem.space/images/face/.cache/150x150/stefan-stefancik-QXevDflbl8A-unsplash.jpg"
                  alt=""
                />
              </div>
              {/* <div className="profile_user_edit"> */}
              <button className="edit_profile">Edit Profile</button>
              {/* </div> */}
            </div>

            <div className="profile_bio">
              <h3 className="profile_bio_name">Laxhmi Cheat Fund</h3>
              <h6 className="profile_user_name">@Anuradha</h6>
              <h6 className="profile_joining">Joined On 1 April 2020</h6>
            </div>
            <div className="profile_follow">
              <h6 className="profile_following">5M Following</h6>
              <h6 className="profile_followers">1 Followers</h6>
            </div>
            <div className="profile_page_contents">
              <h6 className="profile_page_contents_title">Tweets</h6>
              <h6 className="profile_page_contents_title">Tweets & replies</h6>
              <h6 className="profile_page_contents_title">Media</h6>
              <h6 className="profile_page_contents_title">Likes</h6>
            </div>
            <div className="profile_page_feed_tweets">
              <Tweets></Tweets>
              <Tweets></Tweets>
              <Tweets></Tweets>
              <Tweets></Tweets>
              <Tweets></Tweets>
              <Tweets></Tweets>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_page;
