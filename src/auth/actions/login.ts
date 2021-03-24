import { createAction } from "@reduxjs/toolkit";
import { feature } from "../constans";

const actionName = "token";

export const loginAction = createAction<{ login: string; password: string }>(
  `${feature}:${actionName}`
);
