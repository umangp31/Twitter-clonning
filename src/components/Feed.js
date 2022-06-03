import React from 'react'
import "./Feed.css"
import Tweets from './Tweets'
import YourTweet from './YourTweet'
const Feed = () => {
    return (
        <div className='Feed_Container'>
            <YourTweet />
            <Tweets />
            <Tweets />
            <Tweets />
            <Tweets />
            <Tweets />
            <Tweets />
            <Tweets />
        </div>
    )
}

export default Feed