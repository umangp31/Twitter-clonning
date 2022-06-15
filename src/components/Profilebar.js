import { useState } from 'react';
import { DISPLAYNAME, USERIMG, USERNAME } from "../utills/User";
import auth from "./firebase";
import './Profilebar.css';
function Profilebar() {
  // const [{ user }, dispatch] = useStateValue();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleLogout = (e) => {
    console.log("ho");
    e.preventDefault();
    auth.signOut().then(console.log("hi"));
  }
  return (
    <>
      <div className='Profilebar-Container mobile'>
        <div className='profile-pic' onClick={handleLogout}>
          <img src={USERIMG} alt="" />
        </div>
        <div className='text-area'>
          <h4>{DISPLAYNAME}</h4>
          <p>{USERNAME}</p>
        </div>
        {/* <div className='profilebar_options'> */}
        <svg onClick={() => isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)} viewBox="0 0 24 24" fill='white' aria-hidden="true" class="r-1nao33i r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr MoreSVG"><g><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
        {/* </div> */}
      </div>
      {
        isModalOpen ? (
          <div className='profilebar_modal'>
            <div className='Profilebar-container modal'>
              <div className='profile-pic' onClick={handleLogout}>
                <img src={USERIMG} alt="" />
              </div>
              <div className='text-area'>
                <h4>{DISPLAYNAME}</h4>
                <p>{USERNAME}</p>
              </div>
            </div>
            <h3 className='modal_options'>Add an exsiting Acount</h3>
            <h3 className='modal_options' onClick={handleLogout} >Logout {USERNAME}</h3>
          </div>) : (<span></span>)
      }
    </>
  )
}

export default Profilebar