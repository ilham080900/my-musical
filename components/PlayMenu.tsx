import { useRouter } from "next/navigation";

const PlayMenu = () => {
  const router = useRouter();
  return (
    <>
      <div className="justify-center flex flex-row gap-y-4 py-1 px-2 items-center text-center bg-neutral-800 rounded-md">
        <button
          onClick={() => router.push("/play")}
          className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Musik</p>
        </button>
        <button
          onClick={() => router.push("/video")}
          className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Video</p>
        </button>
        <button
          onClick={() => router.push("/chord")}
          className="flex flex-row justify-between bg-neutral-700 text-white text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Chord</p>
        </button>
      </div>
    </>
  );
};

export default PlayMenu;
