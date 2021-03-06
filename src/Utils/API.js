import axios from "axios";

export default axios.create({
  baseURL: "https://api.github.com/search/repositories",
  responseType: "json"
});