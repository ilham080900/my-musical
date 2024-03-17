import callAPI from "@/config/api";
import { RegisterTypes, LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function apiRegister(data: RegisterTypes) {
  const url = `${ROOT_API}/register`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}

export async function apiLogin(data: LoginTypes) {
  const url = `${ROOT_API}/login`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
