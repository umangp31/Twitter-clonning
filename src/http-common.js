import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/tweet",
  headers: {
    "Content-type": "application/json"
  }
});