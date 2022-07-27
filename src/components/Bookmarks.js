import "./Bookmarks.css";
import PageHeader from "./PageHeader";
const Bookmarks = (props) => {
  return (
    <div className="container">
      <div className="bookmarkTitle">
        <PageHeader />
      </div>
      <div className="bookmarkBox">
        <div className="bookmarkBG">
          <img
            src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-800x400.v1.png"
            alt=""
            className="bookmarkImg"
          />
        </div>
        <div className="bookmarkContent">
          <h2 className="saveTweets">Save Tweets for later</h2>
          <p className="noContent">
            Don't let the good ones fly away! Bookmark Tweets to easily find
            them again in the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
