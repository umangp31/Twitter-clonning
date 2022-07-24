import axios from "axios";

export default axios.create({
  baseURL: "http://51.107.208.140:5000/api/tweet",
  headers: {
    "Content-type": "application/json"
  }
});