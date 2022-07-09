// import React from 'react'
import { Outlet } from "react-router-dom"
import MessageRightBar from "./MessageRightBar"
import "./Messages.css"

function Messages() {
  return (
    <>
      <div className='Messages_Container'>
        <MessageRightBar />
        <Outlet />
      </div>
    </>
  )
}

export default Messages