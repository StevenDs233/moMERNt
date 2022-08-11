import axios from "axios";

const url = "http://localhost:5051/posts";

export const fetchPosts = () => axios.get(url);
