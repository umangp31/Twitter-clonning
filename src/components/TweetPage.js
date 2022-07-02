import { useParams } from "react-router-dom"
import { BackArrowIcon } from "../Assests/Icons"
import data from "../data/tweet.json"
import "./TweetPage.css"
import Tweets from "./Tweets"
function TweetPage() {
    const { tweetId } = useParams();
    const tweet = data[tweetId];
    return (
        <div className="TweetPage_Container">
            <div className="TweetPage_header" onClick={() => { window.history.back() }}>
                <BackArrowIcon />
                <h3>Tweet</h3>
            </div>
            <Tweets
                mainTweet
                key={tweet.id}
                displayName={tweet.displayName}
                userName={tweet.userName}
                tweetContent={tweet.tweetContent}
                likeCount={tweet.likeCount}
                replyCount={tweet.replyCount}
                retweetCount={tweet.retweetCount}
                tweetPostedTime={tweet.tweetPostedTime}
                imgLink={tweet.imgLink}
                videoLink={tweet.videoLink}
            />
        </div>
    )
}
export default TweetPage