// import { AutoAwesome } from ''
import { useState } from 'react';
import IconButton from '../Assests/IconButton';
import { CreatePollIcon, DatePickerIcon, EmojisIcon, GIFUploadIcon, ImageUploadIcon } from '../Assests/Icons';
import { USERIMG } from '../utills/User';
import "./YourTweet.css";

const YourTweet = ({ tweets }) => {
    const [Tweettext, setTweettext] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className='Yourtweet_Container mobile' >
            <div className="Write_Tweet">
                <div className="YourTweet_Avatar">
                    <img src={USERIMG} alt='' />
                </div>
                <div className='YourTweet_Form'>
                    <textarea cols="8" rows="2" draggable="false" className='YourTweet_TweetText'
                        value={Tweettext}
                        onChange={(e) => setTweettext(e.target.value)}
                        placeholder="Whats's Happening"
                        onFocus={() => setIsFocused(true)}
                    />
                    {
                        isFocused ? (<div className="YourTweet_TweetReplyAcces">
                            <i class="fa-solid fa-earth-asia"></i> Everyone Can reply
                        </div>) : (undefined)
                    }

                </div>
            </div>
            <div className="YourTweet_TweetAttachment">
                <IconButton hoverColor="twitter_blue_hover">
                    <ImageUploadIcon />
                </IconButton>
                <IconButton hoverColor="twitter_blue_hover">
                    <GIFUploadIcon />
                </IconButton>
                <IconButton hoverColor="twitter_blue_hover">
                    <CreatePollIcon />
                </IconButton>
                <IconButton hoverColor="twitter_blue_hover">
                    <EmojisIcon />
                </IconButton>
                <IconButton hoverColor="twitter_blue_hover">
                    <DatePickerIcon />
                </IconButton>
                <button
                    disabled={!Tweettext}
                    className='YourTweet_PostTweetButton'
                    onClick={() => { alert(Tweettext); setTweettext("") }}
                >Tweet</button>
            </div>
        </div>
    )
}

export default YourTweet