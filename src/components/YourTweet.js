// import { AutoAwesome } from ''
import { useState } from 'react';
import IconButton from '../Assests/IconButton';
import { CreatePollIcon, DatePickerIcon, EmojisIcon, GIFUploadIcon, ImageUploadIcon } from '../Assests/Icons';
import { USERIMG } from '../utills/User';
import { storageBucket } from "./firebase";
import "./YourTweet.css";
const YourTweet = () => {
    const [Tweettext, setTweettext] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(undefined);
    const [isUploadStarted, setIsUploadStarted] = useState(false);
    const [imagePreviewURL, setImagePreviewURL] = useState("");
    const handleChange = e => {
        e.preventDefault();
        console.log(e.target);
        console.log(e.target.files[0]);
        if (e.target.files[0]) {
            setImagePreviewURL(URL.createObjectURL(e.target.files[0]));
            setImage(e.target.files[0])
            console.log(imagePreviewURL);
        }
    }           
    function uploadToStorageBucket(e) {
        e.preventDefault();
        setIsUploadStarted(true);
        const uploadTask = storageBucket.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            (error) => {
                console.log(error.message);
            },
            () => {
                storageBucket.ref("images").child(image.name).getDownloadURL().then(url => {
                    setImageURL(url);
                })
                setImage(null);
            }
        )
        setIsUploadStarted(false);
    }
    return (
        <div className='Yourtweet_Container mobile' >
            {
                isUploadStarted ? (<progress className='progress' value={progress}></progress>) : (undefined)
            }
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
                    {
                        image ? (
                            <img className='UploadImage' src={imagePreviewURL} alt="hi" />
                        ) : (null)
                    }
                </div>
            </div>
            <div className="YourTweet_TweetAttachment">
                <IconButton hoverColor="twitter_blue_hover" >
                    <input type="file" onChange={handleChange} />
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
                    onClick={uploadToStorageBucket}
                >Tweet</button>
            </div>
        </div>
    )
}

export default YourTweet