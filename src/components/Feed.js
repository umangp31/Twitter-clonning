import React from 'react'
import "./Feed.css"
import Tweets from './Tweets'
import YourTweet from './YourTweet'
const Feed = ({user}) => {
    return (
        <div className='Feed_Container'>
            <YourTweet user={user} />
            <Tweets user={user}/>
        </div>
    )
}

export default Feed