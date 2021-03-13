import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get("/foo-bar");
// 위에껀 이거다. https://api.themoviedb.org/3/foo-bar

export default instance;
