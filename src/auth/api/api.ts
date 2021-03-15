import axios from "axios";
import { APP_API_URL } from "../constans";

export const client = (token: string) => {
  axios({
    method: "get",
    baseURL: APP_API_URL,
    headers: { authorization: token },
  }).then(({ data }) => {
    console.log(data);
  });
};
