export interface RegisterTypes {
  username: string;
  password: string;
  fullname: string;
  confirmPassword?: string;
}

export interface LoginTypes {
  username: string;
  password: string;
}

export interface UserTypes {
  username: string;
  fullname: string;
  user_id: number;
}

export interface CreatePlaylistTypes {
  playlist_name: string;
}

export interface PlaylistTypes {
  id: number;
  playlist_name: string;
  user_id: number;
  songs: SongTypes[];
}

export interface SongTypes {
  id: number;
  song_name: string;
  artist: string;
  thumbnail: string;
  genre: string;
  video: string;
}

export interface AddToPlaylistTypes {
  playlist_id: number;
  songs: number[];
}
