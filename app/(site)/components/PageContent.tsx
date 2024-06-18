"use client";

import React from "react";
import SongItem from "@/components/SongItem";
import usePlayer from "@/hooks/usePlayer";
const {useState} = React

interface PageContentProps {
  songs: any[];
}
const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const [more, setMore] = useState(false);
  const setSong = usePlayer((state) => state.setSong);

  let renderSong
  let renderMoreSong
  const song20 = songs.slice(0, 16);
  const moreSong = songs.slice(16);

  if(more === false) {
    renderSong = song20.map((song: any) => {
      return (
        <SongItem key={song.id} onClick={() => playSong(song)} data={song} />
      );
    })
    renderMoreSong = <div className="cursor-pointer" onClick={() => listMoreSong()}>+{moreSong.length} More</div>
  } else {
    renderSong = songs.map((song: any) => {
      return (
        <SongItem key={song.id} onClick={() => playSong(song)} data={song} />
      );
    })
    renderMoreSong = <div className="cursor-pointer" onClick={() => listMoreSong()}>Less song</div>
  }

  

  function listMoreSong () {
    setMore(!more)
  }

  function playSong(value: any) {
    setSong({
      song_name: value.song_name,
      artist: value.artist,
      id: value.id,
      thumbnail: value.thumbnail,
      video: value.video,
      lirik: value.lirik,
      chord: value.chord,
      video_chord: value.video_chord,
    });
  }

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No song available</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-4 mt-4">
      {renderSong}
      {renderMoreSong}
    </div>
  );
};

export default PageContent;
