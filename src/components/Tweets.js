import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { VideoTag } from "react-video-tag";
import IconButton from "../Assests/IconButton";
import {
  LikeIcon,
  MoreIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
} from "../Assests/Icons";
import TweetDataService from "../services/tweets";
import { USERIMG } from "../utills/User";
import TweetOptions from "./TweetOptions";
import "./Tweets.css";
const Tweets = ({
  userTwitted,
  id,
  mainTweet,
  displayName,
  userName,
  likeCount = 0,
  replyCount,
  tweetContent,
  retweetCount,
  tweetPostedTime,
  imgLink,
  videoLink,
}) => {
  // const [{ user }, dispatch] = useStateValue();
  const [tweets, setTweets] = useState([]);
  const [TwettLikes, setTwettLikes] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isMoreIconClicked, setIsMoreIconClicked] = useState(false);
  const [latestTweets, setLatestTweets] = useState([]);
  const handleTweetLikes = (e) => {
    e.target.classList.toggle("is_animating");
    e.target.classList.toggle("likedPink");
    if (e.target.classList.contains("is_animating")) {
      setIsLiked(true);
      setTwettLikes((TwettLikes) => TwettLikes + 1);
      console.log(e);
      e.target.nextSibling.innerHTML = TwettLikes;
    } else {
      setIsLiked(false);
      setTwettLikes((TwettLikes) => TwettLikes - 1);
    }
  };
  const updateTime = () => Date.now() - tweetPostedTime;
  const showMenu = (e) => {
    e.preventDefault();
    alert("hi");
    console.log(e);
    console.log("hi");
  };
  let newArray;
  const retrieveTweets = () => {
    TweetDataService.getAll()
      .then((response) => {
        // console.log(response.data.tweetList);
        setLatestTweets(response.data.tweetList.reverse());
        // console.log(latestTweets);
        setTweets(...latestTweets);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTweet = async (id) => {
    console.log(id);
    // TweetDataService.deleteTweet(id)
    //   .then((response) => {
    //     console.log("tweet deleted");
    //     console.log(response);
    //     retrieveTweets();
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
    const res = await TweetDataService.deleteTweet(id);
    console.log("Tweet deleted");
    console.log(res);
    retrieveTweets();
  };

  useEffect(() => {
    retrieveTweets();
  }, []);
  useEffect(() => {
    retrieveTweets();
  }, [userTwitted]);
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <>
      {latestTweets &&
        latestTweets.map((t) => {
          return (
            <div
              key={t._id}
              className={
                replyCount > 0
                  ? "Tweet_Container BorderBottomNone"
                  : "Tweet_Container"
              }
            >
              <div classname="TweetOptionWrapper">
                      <TweetOptions/>
              </div>
              <div className="Tweet_UserAvatar">
                <img src={t.imgLink ? t.imgLink : USERIMG} alt="USERIMG" />
                <span
                  className={replyCount > 0 ? "Tweet_ThreadLine" : ""}
                ></span>
              </div>
              <div className="Tweet_Main">
                <div className="Tweet_UserInfo">
                  <div className="Tweet_PostedInfo">
                    <div className="Tweet_Name">{t.name}</div>
                    <div className="Tweet_UserName">
                      {"@" + t.name.split(" ").join("").toLowerCase()} •
                    </div>
                    <div className="Tweet_ElacepedTimeFromTweet">
                      {parseInt(t.date.split("-")[2]) +
                        " " +
                        Months[parseInt(t.date.split("-")[1] - 1)]}
                    </div>
                  </div>
                  <IconButton
                    hoverColor="twitter_blue_hover"
                    controller={() => {
                      deleteTweet(t._id);
                    }}
                  >
                    <MoreIcon
                      onClick={() => {
  
                        deleteTweet(t._id);
                      }}
                    />
                  </IconButton>
                  
                </div>
                <Link to={`/TweetPage/${t}`} key={id}>
                  <div className="Tweet_TweetCOntent">
                    {t.text}
                    <br />
                    {imgLink ? (
                      <img
                        className="Tweet_TweetContentImg"
                        src={imgLink}
                        alt={imgLink}
                      />
                    ) : null}
                    {videoLink ? (
                      <VideoTag
                        src={videoLink}
                        className="Video"
                        autoPlay
                        loop
                        controls
                      />
                    ) : undefined}
                  </div>
                </Link>
                {mainTweet ? (
                  <div className="TweetUploadStats">
                    6:00 PM • Jul 1,2022 • Twitter for iOS
                  </div>
                ) : undefined}
                {mainTweet ? (
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
                ) : undefined}
                <div
                  className={
                    mainTweet
                      ? "Tweet_TweetOptions Border"
                      : "Tweet_TweetOptions"
                  }
                >
                  <div className="Tweet_TweetOption">
                    <IconButton hoverColor="twitter_blue_hover">
                      <ReplyIcon />
                    </IconButton>
                    <div className={mainTweet ? "dn" : "Tweet_TweetReplys"}>
                      {replyCount}
                    </div>
                  </div>

                  <div className="Tweet_TweetOption">
                    <IconButton hoverColor="twitter_green_hover">
                      <RetweetIcon />
                    </IconButton>
                    <div className={mainTweet ? "dn" : "Tweet_TweetRetweets"}>
                      {retweetCount}
                    </div>
                  </div>
                  <div className="Tweet_TweetOption">
                    <div class="heart" onClick={handleTweetLikes}></div>
                    <div
                      className={mainTweet ? "dn" : "Tweet_TweetLikes"}
                    ></div>
                  </div>
                  <div className="Tweet_TweetOption">
                    <IconButton hoverColor="twitter_blue_hover">
                      <ShareIcon />
                    </IconButton>
                    <div className={mainTweet ? "dn" : "Tweet_ShareTweet"}>
                      16
                    </div>
                  </div>
                </div>
                {mainTweet ? (
                  <div className="Tweet_YourReply">
                    <img src={USERIMG} alt="hi" className="UserAvatar" />
                    <input type="text" placeholder="Tweet your reply" />
                    <button>Reply</button>
                  </div>
                ) : undefined}
              </div>
            </div>
          );
        })}
      {replyCount > 0 ? (
        <div className="Tweet_Container ReplyTweet">
          <div className="Tweet_UserAvatar Reply">
            <img src={USERIMG} alt="" />
            {/* <span className="Tweet_ThreadLine"></span> */}
          </div>
          <div className="Tweet_Main">
            <div className="Tweet_UserInfo">
              <h4 className="Tweet_Name">{displayName}</h4>
              <h4 className="Tweet_UserName">{userName} •</h4>
              <h4 className="Tweet_ElacepedTimeFromTweet">
                {setInterval(() => {
                  updateTime();
                }, 1000)}{" "}
                sec
              </h4>
            </div>
            <div className="Tweet_TweetCOntent">
              {tweetContent}
              <br />
              {imgLink && (
                <img className="Tweet_TweetContentImg" src={imgLink} />
              )}
            </div>
            <div className="Tweet_TweetOptions">
              <div className="Tweet_TweetOption">
                <ReplyIcon />
                <div className="Tweet_TweetReplys">{replyCount}</div>
              </div>
              <div className="Tweet_TweetOption">
                <RetweetIcon />
                <div className="Tweet_TweetRetweets">{retweetCount}</div>
              </div>
              <div className="Tweet_TweetOption">
                <LikeIcon onClick={handleTweetLikes} />
                <div className="Tweet_TweetLikes">{TwettLikes}</div>
              </div>
              <div className="Tweet_TweetOption">
                <ShareIcon />
                <div className="Tweet_ShareTweet">16</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Tweets;
