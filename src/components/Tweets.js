import { useState } from 'react';
import { VideoTag } from 'react-video-tag';
import { LikeIcon, MoreIcon, ReplyIcon, RetweetIcon, ShareIcon } from '../Assests/Icons';
import { USERIMG } from '../utills/User';
import "./Tweets.css";
const Tweets = ({ mainTweet, displayName, userName, likeCount, replyCount, tweetContent, retweetCount, tweetPostedTime, imgLink, videoLink }) => {
    // const [{ user }, dispatch] = useStateValue();
    const [TwettLikes, setTwettLikes] = useState(likeCount);
    const [isLiked, setIsLiked] = useState(false);
    const handleTweetLikes = (e) => {
        e.preventDefault();
        if (!isLiked) {
            setTwettLikes(TwettLikes + 1);
            setIsLiked(true);
        }
        else {
            setTwettLikes(TwettLikes - 1);
            setIsLiked(false)
        }
    }
    const updateTime = () => Date.now() - tweetPostedTime;
    return (
        <>
            <div className={replyCount > 0 ? "Tweet_Container BorderBottomNone" : "Tweet_Container"}>
                <div className='Tweet_UserAvatar'>
                    <img src={USERIMG} alt='USERIMG' />
                    <span className={replyCount > 0 ? "Tweet_ThreadLine" : ""}></span>
                </div>
                <div className='Tweet_Main'>
                    <div className='Tweet_UserInfo'>
                        <div className='Tweet_PostedInfo'>
                            <div className='Tweet_Name'>{displayName}</div>
                            <div className='Tweet_UserName'>{userName} •</div>
                            <div className='Tweet_ElacepedTimeFromTweet'> 8m</div>
                        </div>
                        <MoreIcon />
                    </div>
                    <div className='Tweet_TweetCOntent'>
                        {tweetContent}
                        <br />
                        {
                            imgLink ? (<img className='Tweet_TweetContentImg' src={imgLink} alt={imgLink} />) : (null)
                        }
                        {
                            videoLink ? (<VideoTag src={videoLink} className="Video" autoPlay loop controls />) : (undefined)
                        }
                    </div>
                    {
                        mainTweet ? (
                            <div className="TweetUploadStats">6:00 PM • Jul 1,2022  • Twitter for iOS</div>
                        ) : (undefined)
                    }
                    {
                        mainTweet ? (
                            <div className="Tweet_TweetStats">
                                <span>
                                    <span>{likeCount}</span>
                                    Like
                                </span>
                                <span>
                                    <span>{replyCount}</span>
                                    Reply
                                </span>
                                <span>
                                    <span> {retweetCount}</span>
                                    Retweet
                                </span>
                            </div>
                        ) : (undefined)
                    }
                    <div className={mainTweet ? "Tweet_TweetOptions Border" : "Tweet_TweetOptions"}>
                        <div className="Tweet_TweetOption">
                            <ReplyIcon />
                            <div className={mainTweet ? "dn" : "Tweet_TweetReplys"}>{replyCount}</div>
                        </div>
                        <div className="Tweet_TweetOption">
                            <RetweetIcon />
                            <div className={mainTweet ? "dn" : "Tweet_TweetRetweets"}>{retweetCount}</div>
                        </div>
                        <div className="Tweet_TweetOption">
                            <LikeIcon onClick={handleTweetLikes} />
                            <div className={mainTweet ? "dn" : "Tweet_TweetLikes"}>{TwettLikes}</div>
                        </div>
                        <div className="Tweet_TweetOption">
                            <ShareIcon />
                            <div className={mainTweet ? "dn" : "Tweet_ShareTweet"}>16</div>
                        </div>
                    </div>
                    {
                        mainTweet ? (
                            <div className="Tweet_YourReply">
                                <img src={USERIMG} alt="hi" className="UserAvatar" />
                                <input type="text" placeholder="Tweet your reply" />
                                <button>Reply</button>
                            </div>
                        ) : (undefined)
                    }
                </div>
            </div>
            {
                replyCount > 0 ? (
                    <div className='Tweet_Container ReplyTweet' >
                        <div className='Tweet_UserAvatar Reply'>
                            <img src={USERIMG} alt='' />
                            {/* <span className="Tweet_ThreadLine"></span> */}
                        </div>
                        <div className='Tweet_Main'>
                            <div className='Tweet_UserInfo'>
                                <h4 className='Tweet_Name'>{displayName}</h4>
                                <h4 className='Tweet_UserName'>{userName} •</h4>
                                <h4 className='Tweet_ElacepedTimeFromTweet'>
                                    {
                                        setInterval(() => {
                                            updateTime()
                                        }, 1000)
                                    } sec</h4>
                            </div>
                            <div className='Tweet_TweetCOntent'>
                                {tweetContent}
                                <br />
                                {
                                    imgLink && <img className='Tweet_TweetContentImg' src={imgLink} />
                                }
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
                ) : (null)
            }
        </>
    )
}

export default Tweets