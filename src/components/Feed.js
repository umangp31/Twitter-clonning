import React from 'react'
import "./Feed.css"
import Tweets from './Tweets'
import YourTweet from './YourTweet'
const Feed = () => {
    return (
        <div className='Feed_Container'>
            <YourTweet/>
            <Tweets replyCount='0'/>
            <Tweets replyCount='0'/>
            <Tweets replyCount='0'/>
            <Tweets replyCount='0'/>
            <Tweets replyCount='0'/>
            <Tweets replyCount='1'/>
            <Tweets replyCount='0'/>
        </div>
    )
}

export default Feed