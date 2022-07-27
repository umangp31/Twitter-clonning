import MessageModal from "./MessageModal"
import "./Rightbar.css"
import What_happening_card from './What_happening_card'
const RightBar = () => {
    return (
        <>
            <div className='rightbar_Container'>
                <div className="rightbar_searchbar rightbar_box">
                    <span><input className='search_twitter' type="search" placeholder='Search Twitter' /></span>
                </div>
                <div className="rightbar_whats_happening rightbar_box">
                    <div className="whats_happening_content">
                        <h3 className='whats_happening_title'>Whats happening</h3>
                        <What_happening_card />
                        <What_happening_card />
                        <What_happening_card />
                        <What_happening_card />
                        <What_happening_card />
                    </div>
                </div>
                <div className="rightbar_follow_whom rightbar_box">
                    <div className="follow_whom_content">
                        <h3 className="follow_whom_title">Who to follow</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightBar