import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
  return (
    <button className="transition opacity-0 rounded-full flex item-center bg-neutral-300 p-4 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-100">
      {" "}
      <FaPlay className="text-black" />{" "}
    </button>
  );
};

export default PlayButton;
