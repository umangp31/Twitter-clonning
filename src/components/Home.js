import { useEffect, useState } from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Bookmarks from './Bookmarks';
import Explore from "./Explore";
import Feed from './Feed';
import "./Home.css";
import MessagePanel from './MessagePanel';
import Messages from './Messages';
import Notifications from './Notifications';
import FollowStats from './pages/FollowStats';
import Profile_Page from "./Profile_page";
import RightBar from './RightBar';
import Sidebar from './Sidebar';
import TweetPage from './TweetPage';

const Home = () => {
    useEffect(() => {
        document.title = "Home / Twitter"
    }, [])
    const [isRightbar, setIsRightbar] = useState(true);
    return (
        <Router>
            <div className='Home_Container'>
                <Sidebar setIsRightbar={setIsRightbar} />
                <Routes>
                    <Route path='/' element={<Feed />} />
                    <Route path='/profile' element={<Profile_Page />} />
                    <Route path='/messages' element={<Messages />} >
                        <Route path='/messages' element={<MessagePanel />} />
                        <Route path=':id' element={<MessagePanel />} />
                    </Route>
                    <Route path='/explore' element={<Explore />} />
                    {/* <Route path='/communities' element={<Profile_Page />} /> */}
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/bookmarks' element={<Bookmarks />} />
                    <Route path='/TweetPage/:tweetId' element={<TweetPage />} />
                    <Route path='/follow' element={<FollowStats />} />
                </Routes>
                {
                    isRightbar ? (<RightBar />) : (undefined)
                }

            </div>
        </Router>
    )
}

export default Home