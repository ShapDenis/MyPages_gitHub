import axios from "axios";
import { APP_API_URL } from "../constans";

axios({
  method: "post",
  baseURL: APP_API_URL,
  data: {
    Username: "login",
    Password: "Password",
  },
});
