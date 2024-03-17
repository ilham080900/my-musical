import callAPI from "@/config/api";
import { AddToPlaylistTypes, CreatePlaylistTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function apiCreatePlaylist(data: CreatePlaylistTypes) {
  const url = `${ROOT_API}/create-playlist`;

  return callAPI({
    url,
    method: "POST",
    token: true,
    data,
  });
}

export async function apiListPlaylist() {
  const url = `${ROOT_API}/list-playlist`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

export async function apiAddToPlaylist(data: AddToPlaylistTypes) {
  const url = `${ROOT_API}/addto-playlist`;

  return callAPI({
    url,
    method: "POST",
    token: true,
    data,
  });
}
