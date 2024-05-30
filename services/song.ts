import callAPI from "@/config/api";
import { CreatePlaylistTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function apiListSong() {
  const url = `${ROOT_API}/list-song`;

  return callAPI({
    url,
    method: "GET",
  });
}

export async function apiSearchSong(search: string) {
  const url = `${ROOT_API}/list-song?song=${search}`;

  return callAPI({
    url,
    method: "GET",
  });
}
