"use client";

interface VideoContentProps {
  songs: any;
  songId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ songs, songId }) => {
  return (
    <div className="flex flex-col w-[345px] h-[500px] cursor-pointer rounded-lg">
      <div className="relative hover:bg-neutral-700/50 rounded-lg">
        {/* <MediaItem onClick={() => {}} data={songs[0]} /> */}
      </div>
    </div>
  );
};

export default VideoContent;
