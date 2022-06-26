import { useState } from "react";
import { BackArrowIcon, CreatePollIcon, DatePickerIcon, EmojisIcon, GIFUploadIcon, ImageUploadIcon, TweetIcon } from "../Assests/Icons";
import { USERIMG } from '../utills/User';
import "./MobileYourTweet.css";
import "./YourTweet.css";
function MobileYourTweetButton() {
    const [Tweettext, setTweettext] = useState("");
    const [isYourTweetOpen, setIsYourTweetOpen] = useState(false);
    const ShowYourTweetModal = () => {
        setIsYourTweetOpen(true);
    }
    return (
        <>
            <div className="YourTweetBtn" onClick={ShowYourTweetModal}>
                <TweetIcon />
            </div>
            {
                isYourTweetOpen ? (<>
                    <div className='Yourtweet_Container MobileModal' >
                        <div className="YourTweetMobileHeader">
                            <div className="iconbutton" onClick={() => setIsYourTweetOpen(false)}>
                                <BackArrowIcon />
                            </div>
                            <button
                                disabled={!Tweettext}
                                className='YourTweet_PostTweetButton'
                                onClick={() => { alert(Tweettext); setTweettext("") }}
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
                                </div>
                            </div>
                        </div>
                        <div className="YourTweet_TweetAttachment ">
                            <ImageUploadIcon />
                            <GIFUploadIcon />
                            <CreatePollIcon />
                            <EmojisIcon />
                            <DatePickerIcon />
                        </div>
                    </div>
                </>) : (undefined)

            }
        </>
    )
}

export default MobileYourTweetButton