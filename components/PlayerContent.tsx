"use client";

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import LikeButton from "./LikeButton";
import MediaItem from "./MediaItem";
import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlinePlus,
} from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import useSongModal from "@/hooks/useSongModal";
import { useRouter } from "next/navigation";

interface PlayerContentProps {
  song?: [];
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

  const playSong = usePlayer((state) => state.song);
  const openModal = useSongModal((state) => state.onOpen);

  // const onPlayNext = () => {
  //   if (player.ids.length === 0) {
  //     return;
  //   }

  //   const currentIndex = player.ids.findIndex((id) => id === player.activeId);
  //   const nextSong = player.ids[currentIndex + 1];

  //   if (!nextSong) {
  //     return player.setId(player.ids[0]);
  //   }

  //   player.setId(nextSong);
  // };

  // const onPlayPrevious = () => {
  //   if (player.ids.length === 0) {
  //     return;
  //   }

  //   const currentIndex = player.ids.findIndex((id) => id === player.activeId);
  //   const previousSong = player.ids[currentIndex - 1];

  //   if (!previousSong) {
  //     return player.setId(player.ids[player.ids.length - 1]);
  //   }

  //   player.setId(previousSong);
  // };

  // const [play, { pause, sound }] = useSound(songUrl, {
  //   volume: volume,
  //   onplay: () => setIsPlaying(true),
  //   onend: () => {
  //     setIsPlaying(false);
  //     onPlayNext();
  //   },
  //   onpause: () => setIsPlaying(false),
  //   format: ["mp3"],
  // });

  // useEffect(() => {
  //   sound ? play() : pause();

  //   return () => {
  //     sound?.unload();
  //   };
  // }, [sound]);

  // const handlePlay = () => {
  //   if (!isPlaying) {
  //     play();
  //   } else {
  //     pause();
  //   }
  // };

  // const toggleMute = () => {
  //   if (volume === 0) {
  //     setVolume(1);
  //   } else {
  //     setVolume(0);
  //   }
  // };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={playSong} />
          {playSong.song_name ? <LikeButton songId={playSong.id} /> : <></>}
        </div>
      </div>
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={() => {}}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>
      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          onClick={() => {}}
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={() => {}}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={() => {}}
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        {playSong.song_name ? (
          <button>
            <AiOutlinePlus
              onClick={() => openModal()}
              size={20}
              className="text-neutral-400 cursor-pointer hover:text-white transition"
            />
          </button>
        ) : (
          <></>
        )}
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon
            onClick={() => {}}
            size={34}
            className="mx-5 cursor-pointer"
          />
          <Slider value={volume} onChange={(value) => value} />
        </div>
        <div className="flex items-center gap-x-2 w-[50px] ps-3">
          <button>
            <IoIosArrowUp
              onClick={() => router.push("/play")}
              size={30}
              className="cursor-pointer text-white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
