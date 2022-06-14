import {React, useRef, useEffect} from 'react';
import { useNavigate } from "react-router-dom";

function EditProfilePopup(props) {
    const ref = useRef(null);
    const { onClickOutside } = props;
    const navigate = useNavigate();
    const saveClicked= ()=>{
        // navigate('/');
        onClickOutside && onClickOutside();
      }
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ onClickOutside ]);
      if(!props.show)
        return null;
  return (<div ref={ref} className='edit-profile-modal'>
  <div className="edit-profile-container">
    <div className="edit-profile-header">
      <svg viewBox="0 0 24 24" aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path></g></svg>
      <div className="side-header">
        <h3>Edit profile</h3>
        <button onClick={saveClicked}>Save</button>
      </div>
    </div>
    <div className="profile_bg_image">
      <img src="https://pbs.twimg.com/profile_banners/44196397/1576183471/1080x360" alt="" />
    </div>
    <div className="profile_user_img">
      <img
        src="https://cdn.lorem.space/images/face/.cache/150x150/stefan-stefancik-QXevDflbl8A-unsplash.jpg"
        alt=""
      />
    </div>
    <div className="edit-profile-body">
      <div className="name">
        {/* <label htmlFor="">Name</label> */}
        <input type="text" placeholder="Name" />
      </div>
      <div className="bio">
        {/* <label htmlFor="">Bio</label> */}
        <input type="text" className="special" placeholder="Bio" />
      </div>
      <div className="location">
        {/* <label htmlFor="">Location</label> */}
        <input type="text" placeholder="Location" />
      </div>
      <div className="website">
        {/* <label htmlFor="">Website</label> */}
        <input type="" placeholder="Website" />
      </div>


    </div>
  </div>
</div>) 
}

export default EditProfilePopup