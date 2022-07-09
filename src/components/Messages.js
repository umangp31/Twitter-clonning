// import React from 'react'
import "./Messages.css"
import PageHeader from "./PageHeader"
import MessageRightBar from "./MessageRightBar" 
import MessagePanel from "./MessagePanel"

function Messages() {
  return (
    <>
      <div className='Messages_Container'>
        
        <MessageRightBar/>
        <MessagePanel/>
      </div>
    </>
  )
}

export default Messages