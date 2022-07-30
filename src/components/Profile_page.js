import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./EditProfilePopup";
import "./Profile_page.css";
import Tweets from "./Tweets";
const Profile_page = () => {
  useEffect(() => {
    document.title = "Bill Gates (@thebillbhai)"

  }, [])
  const tab_list = document.getElementsByClassName("profile_page_contents_title");
  const [editclicked, setEditClicked] = useState(false);
  const handleBack = () => {
    window.history.back()
  }
  for (let i = 0; i < tab_list.length; i++) {
    tab_list[i].style.borderBottom = "0";
  }
  const handleActiveTab = (e) => {
    tab_list[1].style.borderBottom = "4px solid var(--twitter_blue)"
    // const active_line_list = document.getElementsByClassName("line");
    const current_element = e.target;
    for (let i = 0; i < tab_list.length; i++) {
      if (tab_list[i].classList.contains("active_tab")) {
        tab_list[i].classList.remove("active_tab");
      }
    }
    for (let i = 0; i < tab_list.length; i++) {
      tab_list[i].style.borderBottom = "0";
    }
    current_element.classList.add("active_tab");
    current_element.style.borderBottom = "4px solid var(--twitter_blue)"
  }
  return (
    <div className="profile_page">
      <div className="profile_page_container">
        <div className="profile_page_title">
          <div className="iconbutton" onClick={handleBack}>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244)" }}><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg></div>
          {/* <img src="" alt="" className="title_back" /> */}
          {/* <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style="color: rgb(239, 243, 244);"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg> */}
          {/* <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style="color: rgb(239, 243, 244);"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg> */}
          <div className="heder_user_info">
            <h3 className="title_user_name">Elon Musk</h3>
            <h6 className="title_no_of_tweets">18.3K Tweets</h6>
          </div>
        </div>

        <div className="profile_page_profile">
          <div className="profile_bg_image">
            <img src="https://pbs.twimg.com/profile_banners/44196397/1576183471/1080x360" alt="" />
          </div>
          <div className="profile_page_profile_body">
            <div className="profile_user_info">
              <div className="profile_user_img">
                <img
                  src="https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg"
                  alt=""
                />
              </div>
              {/* <div className="profile_user_edit"> */}
              <button className="edit_profile" onClick={() => editclicked ? setEditClicked(false) : setEditClicked(true)}>Edit Profile</button>
              {/* </div> */}
            </div>

            <div className="profile_bio">
              <h3 className="profile_bio_name">Elon Musk</h3>
              <h6 className="profile_user_name">@elonmusk</h6>
              <h6 className="profile_joining">Joined On June 2009</h6>
              <div className="profile_bio_text">
                CryptoBaap
              </div>
            </div>
            <div className="profile_follow">
              <Link to={`/follow`}>
                <h6 className="profile_following"> <span className="profile_following_count">112</span>Following</h6></Link>
              <h6 className="profile_followers"><span className="profile_followers_count">97.6M</span>Followers</h6>
            </div>
            <div className="profile_page_contents">
              <h6 className="profile_page_contents_title active_tab" onClick={handleActiveTab}>Tweets</h6>
              <h6 className="profile_page_contents_title" onClick={handleActiveTab}>Tweets & replies</h6>
              <h6 className="profile_page_contents_title" onClick={handleActiveTab}>Media</h6>
              <h6 className="profile_page_contents_title" onClick={handleActiveTab}>Likes</h6>
            </div>
            <div className="profile_page_feed_tweets">
              <Tweets></Tweets>
              <Tweets></Tweets>
              <Tweets></Tweets>
            </div>
          </div>
        </div>
      </div>
      <Popup show={editclicked} onClickOutside={() => { setEditClicked(false) }} />
      {/* {editclicked ? <Popup show={editclicked} onClickOutside={() => {setEditClicked(false)}}/>: (<span></span>)
      } */}
    </div>
  );
};

export default Profile_page;
