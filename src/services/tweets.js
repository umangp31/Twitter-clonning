import http from "../http-common";

class TweetDataService{
    getAll(){
        return http.get();
    }
    postTweet(body) {
        console.log("post tweet");
        return http.post();
    }
}


export default new TweetDataService();