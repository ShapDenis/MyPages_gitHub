import axios from "axios";
import { APP_API_URL } from "../constans";

export const client = (token: string) => {
  return axios({
    method: "get",
    baseURL: APP_API_URL,
    headers: { Authorization: token },
    withCredentials: true,
  }).then(({ data }) => {
    console.log(data);
  });
};
