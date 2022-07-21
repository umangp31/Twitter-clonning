import { useState } from "react"
import FollowCard from "../FollowCard"
import "./followStat.css"
function FollowStats() {
    const [isAllScreen, setisAllScreen] = useState(true)
    const handleActiveTab = () => {
        if (isAllScreen) {
            setisAllScreen(false)
        }
        else {
            setisAllScreen(true)
        }
    }
    const a = [];
    for (let i = 0; i < 8; i++) {
        a[i] = i
    }
    const back = () => {
        window.history.back()
    }
    return (
        <div className="followContainer">
            <header className="sticky">
                <div className="follow_page_title">
                    <div className="iconbutton" onClick={back}>
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244)" }}><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg></div>
                    <div className="heder_user_info">
                        <h3 className="title_user_name">Vivek Suthar</h3>
                        <h6 className="title_no_of_tweets">@theviveksuthar</h6>
                    </div>
                </div>
                <nav className='follows_tabs'>
                    <div className={isAllScreen ? "follows_tab_options active_tab" : "Notifications_tab_options"} onClick={handleActiveTab}>Followers </div>
                    <div className={isAllScreen ? "follows_tab_options" : "Notifications_tab_options active_tab"} onClick={handleActiveTab}>Following</div>
                </nav>
            </header>
            <main>
                {
                    a.map((item, index) => {
                        return <FollowCard key={index} />
                    }
                    )
                }
            </main>
        </div>
    )
}

export default FollowStats