import React, { useEffect } from 'react'
import Feed from "./Feed"
import "./Home.css"
import RightBar from './RightBar'
import Sidebar from './Sidebar'
import Messages from './Messages'
import Profile_page from './Profile_page'

const Home = () => {
    useEffect(()=>{
        document.title="Home / Twitter"
    },[])
    return (
        <>
            <div className='Home_Container'>
                <Sidebar/>
                {/* <Messages/> */}
                {/* <Feed/> */}
                <Profile_page/>
                <RightBar />
            </div>
        </>
    )
}

export default Home