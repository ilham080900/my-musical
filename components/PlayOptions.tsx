import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

const PlayOptions = () => {
  const router = useRouter();
  return (
    <>
      <div className="justify-center flex flex-row gap-y-4 py-1 px-2 items-center text-center bg-neutral-800 rounded-md right-0">
        <button
          onClick={() => router.push("/terkait")}
          className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Terkait</p>
        </button>
        <button
          onClick={() => router.push("/lirik")}
          className="flex flex-row justify-between bg-neutral-700 text-neutral-400 text-center px-5 py-2 m-4 rounded-full hover:bg-neutral-500"
        >
          <p>Lirik</p>
        </button>
      </div>
    </>
  );
};

export default PlayOptions;
