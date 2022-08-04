import http from "../http-common";

class TweetDataService {
  getAll() {
    return http.get();
  }
  postTweet(body) {
    console.log("post tweet");
    return http.post("/", body);
  }
  deleteTweet(id) {
    return http.delete(`?id=${id}`);
  }
}

export default new TweetDataService();
