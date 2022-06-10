import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "./Home.css"
import Profile_Page from "./Profile_page"
import RightBar from './RightBar'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Messages from './Messages'
const Home = () => {
    useEffect(()=>{
        document.title="Home / Twitter"
    },[])
    return (
        <Router>
            <div className='Home_Container'>
                <Sidebar/>
                {/* <Messages/> */}
                {/* <Feed/> */}
                <Routes>
                    <Route path='/' element={<Feed/>} />
                    <Route path='/profile' element={<Profile_Page/>}/>
                    <Route path='/messages' element={<Messages/>} />
                    <Route path='/explore' element={<Profile_Page/>}/>
                    <Route path='/communities' element={<Profile_Page/>}/>
                    <Route path='/notifications' element={<Profile_Page/>}/>
                    <Route path='/bookmarks' element={<Profile_Page/>}/>
                </Routes>
                <RightBar />
            </div>
        </Router>
    )
}

export default Home