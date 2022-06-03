import React from 'react'
import auth from "./firebase"
import './Profilebar.css'
function Profilebar({ user }) {
  const handleLogout = () => {
    auth.signOut()
  }
  return (
    <div className='Profilebar-Container'>
      <div className='profile-pic'>
        <img src={user.photoURL} onClick={handleLogout} alt="" />
      </div>
    </div>
  )
}

export default Profilebar