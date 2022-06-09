import React, { useEffect } from 'react'
import "./Home.css"
import Profile_Page from "./Profile_page"
import RightBar from './RightBar'
import Sidebar from './Sidebar'
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
                <Profile_Page/>
                <RightBar />
            </div>
        </>
    )
}

export default Home