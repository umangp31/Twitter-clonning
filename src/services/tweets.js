import http from "../http-common";

class TweetDataService{
    getAll(){
        return http.get();
    }
}


export default new TweetDataService();