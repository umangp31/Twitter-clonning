import { useParams } from "react-router-dom"
import "./TweetPage.css"

function TweetPage() {
    const { tweetId } = useParams()
    return (
        <div className="TweetPage_Container">
            <button onClick={() => window.history.back()}>Yaha se Nikal La**de</button>
            TweetPage
            <br />
            Tweet id is :{tweetId}
        </div>
    )
}
export default TweetPage