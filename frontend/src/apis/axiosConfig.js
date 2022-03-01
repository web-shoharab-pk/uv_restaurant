import axios from "axios";
import { baseURL } from "./apis";

axios.defaults.baseURL = baseURL;

export default axios;
