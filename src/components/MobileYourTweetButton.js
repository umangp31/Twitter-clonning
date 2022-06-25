import { TweetIcon } from "../Assests/Icons"
import "./MobileYourTweet.css"
function MobileYourTweetButton() {
    const ShowYourTweetModal=()=>{
        alert("Bhai Kam chal raha hai")
    }
    return (
        <div className="YourTweetBtn" onClick={ShowYourTweetModal}>
            <TweetIcon />
        </div>
    )
}

export default MobileYourTweetButton