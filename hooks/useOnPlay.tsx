import Player from "@/components/Player";
import useAuthModal from "./UseAuthModal";
import usePlayer from "./usePlayer";
import AuthModal from "@/components/AuthModalLogin";

const useOnPlay = (songs: any[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();

  const onPlay = (id: string) => {
    if (!player) {
      return;
      authModal.onOpen();
    }

    player.setId(id);
    player.setId = () => {};
  };
};

export default useOnPlay;
