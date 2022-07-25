import axios from "axios";
import { useState } from "react";
import { BackArrowIcon, CreatePollIcon, DatePickerIcon, EmojisIcon, GIFUploadIcon, ImageUploadIcon, TweetIcon } from "../Assests/Icons";
import { USERIMG } from '../utills/User';
import "./MobileYourTweet.css";
import "./YourTweet.css";
function MobileYourTweetButton() {
    const [Tweettext, setTweettext] = useState("");
    const [isTweetSentOK, setIsTweetSentOK] = useState(false);
    const [isYourTweetOpen, setIsYourTweetOpen] = useState(false);
    const ShowYourTweetModal = () => {
        setIsYourTweetOpen(true);
    }
    function postTweet() {
        let baseURL = "https://twitter-backend-suv.herokuapp.com/api/tweet";
        axios.post(baseURL, {
            text: Tweettext,
            username: "Vivek Suthar",
            imgLink: null,
            user_id: "10"
        })
            .then((res) => {
                console.log(res.status);
                if (res.status === 200) {
                    setIsTweetSentOK(true);
                    setTweettext("");
                    setTimeout(() => {
                        setIsTweetSentOK(false)
                    }, 4000);
                    setTimeout(() => {
                        setIsYourTweetOpen(false)
                    }, 4500);
                }
            })
    }
    return (
        <>
            <div className="YourTweetBtn" onClick={ShowYourTweetModal}>
                <TweetIcon />
            </div>
            {
                isYourTweetOpen ? (
                    <>
                        <div className='Yourtweet_Container MobileModal' >
                            <div className="YourTweetMobileHeader">
                                <div className="iconbutton" onClick={() => setIsYourTweetOpen(false)}>
                                    <BackArrowIcon />
                                </div>
                                <button
                                    disabled={!Tweettext}
                                    className='YourTweet_PostTweetButton'
                                    onClick={postTweet}
                                >Tweet</button>
                            </div>
                            <div className="Write_Tweet ">
                                <div className="YourTweet_Avatar">
                                    <img src={USERIMG} alt='' />
                                </div>
                                <div className='YourTweet_Form MobileDivider'>
                                    <div className="TweetVisibility">Everyone</div>
                                    <textarea cols="15" rows="2" draggable="false" className='YourTweet_TweetText MT'
                                        value={Tweettext}
                                        onChange={(e) => setTweettext(e.target.value)}
                                        placeholder="Whats's Happening"
                                    />
                                    <div className="YourTweet_TweetReplyAcces">
                                        <i class="fa-solid fa-earth-asia"></i> Everyone Can reply
                                        <span className={Tweettext.length > 250 ? "Alert" : ""} >{Tweettext.length < 250 ? `${Tweettext.length}` : ''}
                                            {Tweettext.length < 250 ? "/250" : `-${Tweettext.length - 250}`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="YourTweet_TweetAttachmentMobile ">
                                <ImageUploadIcon />
                                <GIFUploadIcon />
                                <CreatePollIcon />
                                <EmojisIcon />
                                <DatePickerIcon />
                            </div>
                            <div className="progress">
                                <div className="value" style={{
                                    width: `${Tweettext.length}px`,
                                    maxWidth: "250px"
                                }}></div>
                            </div>
                        </div>
                    </>) : (undefined)

            }
            {
                isTweetSentOK ? (
                    <div className="tweetSent">Your Tweet was sent</div>
                ) : (undefined)
            }
        </>
    )
}

export default MobileYourTweetButton