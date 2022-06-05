import React from 'react'
import auth from "./firebase"
import './Profilebar.css'
import { useStateValue } from './StateProvider'
function Profilebar() {
  const handleLogout = () => {
    auth.signOut()
  }
  const [{user}, dispatch] = useStateValue();
  console.log(user.displayName);
  return (
    <div className='Profilebar-Container'>
      <div className='profile-pic'>
        <img src={user.photoURL} onClick={handleLogout} alt="" />
      </div>
      <div className='text-area'>
        <h4>{user.displayName}</h4>
        <p>@vivekcodes</p>
      </div>
    </div>
  )
}

export default Profilebar