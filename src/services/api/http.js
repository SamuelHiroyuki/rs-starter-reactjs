import axios from "axios";

const http = axios.create({
    baseURL: "https://rocketseat-node.herokuapp.com/api"
});

export default http;
