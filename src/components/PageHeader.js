import './PageHeader.css'

const PageHeader = (props) => {
  return (
    <div className="profile_page_title">
      {/* <div className="iconbutton">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" style={{ color: "rgb(239, 243, 244);" }}><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg></div> */}
      <div className="heder_user_info">
        <h3 className="title_user_name">Elon Musk</h3>
        <h6 className="title_no_of_tweets">18.3K Tweets</h6>
      </div>
    </div>
  )
}

export default PageHeader
