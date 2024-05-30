import useAuthModal from "./UseAuthModal";
import usePlayer from "./usePlayer";

const useOnPlay = (songs: any[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();

  const playSong = (id: string) => {
    if (!player) {
      return authModal.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return playSong;
};

export default useOnPlay;
