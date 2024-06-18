"use client";

import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import SearchContent from "./components/SearchContent";
import useSong from "@/hooks/useSong";
import { apiSearchSong } from "@/services/song";

interface SearchProps {
  searchParams: {
    title: string;
  };
}


const Search = ({ searchParams }: SearchProps) => {
  const songs = useSong((state) => state.song);

  const filteredSong = songs?.filter((song: any) => {
    if (searchParams.title) {
      return song.song_name
        .toLowerCase()
        .includes(searchParams.title.toLowerCase());
    }
  });

  return (
    <div className="bg-neutral-900 rounded-lg w-full h-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Search</h1>
          <SearchInput />
        </div>
      </Header>
      <SearchContent songs={filteredSong} />
    </div>
  );
};

export default Search;
