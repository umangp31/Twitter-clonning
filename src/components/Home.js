import React, { useEffect } from 'react'
import Feed from "./Feed"
import "./Home.css"
import RightBar from './RightBar'
import Sidebar from './Sidebar'
import Messages from './Messages'
const Home = () => {
    useEffect(()=>{
        document.title="Home / Twitter"
    },[])
    return (
        <>
            <div className='Home_Container'>
                <Sidebar/>
                {/* <Messages/> */}
                <Feed/>
                <RightBar />
            </div>
        </>
    )
}

export default Home