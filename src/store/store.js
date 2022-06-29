import create from 'zustand'
import tweetData from '../data/tweets.json'

const useStore = create((set) => ({
  tweetdata: tweetData,
  newData: (data) => set({tweetdata: data})
}))

export default useStore;