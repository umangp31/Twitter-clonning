import axios from "axios";

export default axios.create({
  baseURL: "https://twitter-backend-suv.herokuapp.com/api/tweet",
  // baseURL: "http://localhost:5000/api/tweet",
  headers: {
    "Content-type": "application/json",
  },
});
