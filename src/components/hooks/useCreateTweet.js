import tweetsData from "../../data/tweets.json"
import {useState} from 'react'
import useStore from '../../store/store'
const useCreateTweet = (tweet) =>{
    const state = useStore();
    const newData = state.newData;
    const addTweet = ()=>{
        console.log(tweet);
        const currentTweet = {
            "text": tweet
        }
        tweetsData.data.push(currentTweet);
        newData(tweetsData)
        console.log(currentTweet);

    }

    return {addTweet}
}

export default useCreateTweet;