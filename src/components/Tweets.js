import React, { useState } from 'react';
import "./Tweets.css";
const Tweets = () => {
    const [TwettLikes, setTwettLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const handleTweetLikes = () => {
        if (!!!isLiked) {
            setTwettLikes(TwettLikes + 1);
            setIsLiked(true)
        }
        else {
            setTwettLikes(TwettLikes - 1);
            setIsLiked(false)
        }
    }
    return (
        <div className='Tweet_Container' >
            <div className='Tweet_UserAvatar'>
                <img src="https://avatar.oxro.io/avatar.svg?name=VIVEK" alt='' />
            </div>
            <div className='Tweet_Main'>
                <div className='Tweet_UserInfo'>
                    <h4 className='Tweet_Name'>Vivek Suthar</h4>
                    <h4 className='Tweet_UserName'>@somewhatsahil •</h4>
                    <h4 className='Tweet_ElacepedTimeFromTweet'> 12m</h4>
                </div>
                <div className='Tweet_TweetCOntent'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem id optio nam asperiores est dignissimos, nostrum sequi architecto libero sed sapiente molestias blanditiis. Minus recusandae perspiciatis, iusto rem accusamus non.
                </div>
                <div className="Tweet_TweetOptions">
                    <div className="Tweet_TweetOption">
                        <i class="fa-regular fa-image"></i>
                        <div className='Tweet_TweetReplys'>16</div>
                    </div>
                    <div className="Tweet_TweetOption">
                        <i class="fa-regular fa-image"></i>
                        <div className='Tweet_TweetRetweets'>16</div>
                    </div>
                    <div className="Tweet_TweetOption">
                        <i class="fa-regular fa-image" onClick={handleTweetLikes}></i>
                        <div className='Tweet_TweetLikes' >{TwettLikes}</div>
                    </div>
                    <div className="Tweet_TweetOption">
                        <i class="fa-regular fa-image"></i>
                        <div className='Tweet_ShareTweet'>16</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweets