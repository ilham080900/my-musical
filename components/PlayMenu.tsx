import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const PlayMenu = () => {
  const searchParams = useSearchParams();

  const router = useRouter();
  const song = searchParams.get("song");

  return (
    <>
      <div className="justify-center flex flex-row gap-y-4 py-1 px-2 items-center text-center bg-neutral-800 rounded-md ">
        <button
          onClick={() => router.push(`/play?song=${song}`)}
          className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Music</p>
        </button>
        <button
          onClick={() => router.push(`/video?song=${song}`)}
          className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Video</p>
        </button>
        <button
          onClick={() => router.push(`/chord?song=${song}`)}
          className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Chord</p>
        </button>
      </div>
    </>
  );
};

export default PlayMenu;
