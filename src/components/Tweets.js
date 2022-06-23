import { useState } from 'react';
import { LikeIcon, ReplyIcon, RetweetIcon, ShareIcon } from '../Assests/Icons';
import { USERIMG } from '../utills/User';
import "./Tweets.css";
const Tweets = ({ displayName, userName, likeCount, replyCount, tweetContent, retweetCount, tweetPostedTime }) => {
    // const [{ user }, dispatch] = useStateValue();
    const [TwettLikes, setTwettLikes] = useState(likeCount);
    const [isLiked, setIsLiked] = useState(false);
    const handleTweetLikes = (e) => {
        e.preventDefault();
        if (!isLiked) {
            setTwettLikes(TwettLikes + 1);
            setIsLiked(true);
            // alert(LIKE);
            // LIKE.style.stroke="Pink"
        }
        else {
            setTwettLikes(TwettLikes - 1);
            setIsLiked(false)
        }
    }
    const updateTime = () => Date.now() - tweetPostedTime;
    console.log();
    return (
        <div className='Tweet_Container' >
            <div className='Tweet_UserAvatar'>
                <img src={USERIMG} alt='' />
                <span className={replyCount > 0 ? "Tweet_ThreadLine" : ""}></span>
            </div>
            <div className='Tweet_Main'>
                <div className='Tweet_UserInfo'>
                    <h4 className='Tweet_Name'>{displayName}</h4>
                    <h4 className='Tweet_UserName'>{userName} •</h4>
                    <h4 className='Tweet_ElacepedTimeFromTweet'>
                        {
                            setInterval(() => {
                                updateTime()
                            }, 10)
                        } sec</h4>
                </div>
                <div className='Tweet_TweetCOntent'>
                    {tweetContent}
                </div>
                <div className="Tweet_TweetOptions">
                    <div className="Tweet_TweetOption">
                        <ReplyIcon />
                        <div className='Tweet_TweetReplys'>{replyCount}</div>
                    </div>
                    <div className="Tweet_TweetOption">
                        <RetweetIcon />
                        <div className='Tweet_TweetRetweets'>{retweetCount}</div>
                    </div>
                    <div className="Tweet_TweetOption">
                        <LikeIcon onClick={handleTweetLikes} />
                        <div className="Tweet_TweetLikes">{TwettLikes}</div>
                    </div>
                    <div className="Tweet_TweetOption">
                        <ShareIcon />
                        <div className='Tweet_ShareTweet'>16</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweets