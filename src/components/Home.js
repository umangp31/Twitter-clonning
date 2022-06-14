import { useEffect } from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Bookmarks from './Bookmarks';
import Explore from "./Explore";
import Feed from './Feed';
import "./Home.css";
import Messages from './Messages';
import Profile_Page from "./Profile_page";
import RightBar from './RightBar';
import Sidebar from './Sidebar';

const Home = () => {
    useEffect(() => {
        document.title = "Home / Twitter"
    }, [])
    return (
        <Router>
            <div className='Home_Container'>
                <Sidebar />
                {/* <Messages/> */}
                {/* <Feed/> */}
                <Routes>
                    <Route path='/' element={<Feed />} />
                    <Route path='/profile' element={<Profile_Page />} />
                    <Route path='/messages' element={<Messages />} />
                    <Route path='/explore' element={<Explore />} />
                    <Route path='/communities' element={<Profile_Page />} />
                    <Route path='/notifications' element={<Profile_Page />} />
                    <Route path='/bookmarks' element={<Bookmarks />} />
                </Routes>
                <RightBar />
            </div>
        </Router>
    )
}

export default Home