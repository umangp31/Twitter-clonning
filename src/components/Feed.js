import { useState } from "react";
import { Link } from 'react-router-dom';
import { MagicIcon } from "../Assests/Icons";
import "./Feed.css";
import Loader from "./Loader";
import MobileSideBar from "./MobileSideBar";
import Tweets from './Tweets';
import YourTweet from './YourTweet';
const Feed = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [tweets, setTweets] = useState([{
        id: 1,
        displayName: "Vivek Suthar",
        userName: "@iamviveksuthar",
        tweetPostedTime: Date.now(),
        tweetContent: "Just Started Implementing Block-chain Based version of Twitter Clone,Front-end is in Progress and Centralized twitter's(back-end server) work is in hands of @somewhatsahil",
        likeCount: 2,
        replyCount: 0,
        retweetCount: 2,
    },
    {
        id: 2,
        displayName: "Sahil Kakwani",
        userName: "@somewhatsahil",
        tweetPostedTime: Date.now(),
        tweetContent: "MongoDB is on Way,API Routes are Ready and Image Support Config Done,Now interagation remain",
        likeCount: 1,
        replyCount: 0,
        retweetCount: 2,
    },
    {
        id: 3,
        displayName: "Umang Patel",
        userName: "@umangp31",
        tweetPostedTime: Date.now(),
        tweetContent: "Twitter Clone Project is 🔥🔥🔥,And @iamviveksuthar and @harsh220 is Adding Block-Chain Based Twitter and @somewhatsahil is Working on Backend,as always I am only to build the Cool front-end",
        likeCount: 1,
        replyCount: 0,
        retweetCount: 2,
    },
    {
        id: 4,
        displayName: "Bill Gates",
        userName: "@umangp31",
        tweetPostedTime: Date.now(),
        tweetContent: "NFT's are cool way to spend your money,And If you have Extra money Invest in Etherum and Still left then Invest in BTCF",
        likeCount: 1,
        replyCount: 0,
        retweetCount: 2,
    }
    ])
    setTimeout(() => setIsLoading(false), 200)
    return (
        <div className='Feed_Container'>
            <div className="Yourtweet_Header">
                <div className='Yourtweet_HomeText' onClick={() => setIsOpen(true)}>
                    Home
                </div>
                <div className='YourTweet_MagicIcon'>
                    <MagicIcon />
                </div>
                <MobileSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <YourTweet tweets={tweets} />
            {
                isLoading ? <Loader /> : <>
                    {
                        tweets.map((tweet) =>
                            <Link to={`/TweetPage/${tweet.id}`}>
                                <Tweets
                                    key={tweet.id}
                                    displayName={tweet.displayName}
                                    userName={tweet.userName}
                                    tweetContent={tweet.tweetContent}
                                    likeCount={tweet.likeCount}
                                    replyCount={tweet.replyCount}
                                    retweetCount={tweet.retweetCount}
                                    tweetPostedTime={tweet.tweetPostedTime}
                                />
                            </Link>
                        )
                    }
                </>
            }
        </div >
    )
}

export default Feed