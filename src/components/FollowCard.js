import "../components/pages/followStat.css";
import { USERIMG, USERNAME } from "../utills/User";
function FollowCard() {
    return (
        <div className="cardContainer">
            <div className="follow">
                <div className='follow_UserAvatar'>
                    <img src={USERIMG} alt='' />
                </div>
            </div>
            <div className="follow_desc">
                <div className='follows_UserInfo'>
                    <h4 className='follows_Name'>VIVEKSUTHAR
                        <h4 className='follows_UserName'>{USERNAME}</h4>
                    </h4>
                    <button className="followNtn">Following</button>
                </div>
                <div className="follws_bio">
                    Founding Member & Chief of Staff
                    @AlchemyPlatform
                    |🌞👩‍💻 🍵🦁❤️| Want to Set your Company up for Success? Make Culture a Top Priority.💥 Web3
                </div>
            </div>
        </div>
    )
}

export default FollowCard