import { DISPLAYNAME, USERIMG, USERNAME } from "../utills/User";
import './MobileProfileBar.css';
function MobileProfileBar() {
  return (
    <div className='Mobile-profile-container'>
        <div className='profile-pic'>
          <img src={USERIMG} alt="" />
          <svg viewBox="0 0 24 24" fill='#ffffff' aria-hidden="true" class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-1hjwoze r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-12ym1je" data-testid="iconPlus"><g><path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>
          
        </div>
        <div className='text-area-container'>
            <div className='text-area-mobile'>
            <h4>{DISPLAYNAME}</h4>
            <p>{USERNAME}</p>
            </div>
            <div className='follow'>
                <p><span>5</span>Following</p>
                <p><span>5k</span>Followers</p>
            </div>
        
        </div>
    </div>
  )
}

export default MobileProfileBar