import React from 'react'
import Feed from './Feed'
import "./Home.css"
import RightBar from './RightBar'
import Sidebar from './Sidebar'
const Home = () => {
    return (
        <>
            <div className='Home_Container'>
                <Sidebar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}

export default Home