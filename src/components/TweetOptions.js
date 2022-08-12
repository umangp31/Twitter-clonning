import React from 'react'
import "./TweetOptions.css"
export default function TweetOptions() {
  return (
      <div className='container'>
          <div className="box">
              <ul className="options">
                  <li>Unfollow Computing programming</li>
                  {/* <li>Not intrested in this Tweet</li> */}
                  <li>Edit tweet</li>
                  <li>Delete tweet</li>
                  {/* <li>Report tweet</li>*/}
              </ul>
        </div>
    </div>
  )
}
