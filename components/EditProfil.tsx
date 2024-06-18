/* eslint-disable react/no-unescaped-entities */
"use client";

import useEditProfilModal from "@/hooks/useEditProfilModal";
import { useState } from "react";

const EditProfil = () => {
  const [EditProfil, setEditProfil] = useState<string>("");
  const closeModalEditProfil = useEditProfilModal((state) => state.onClose);

  const onClick = () => {
    closeModalEditProfil();
  };

  return (
    <>
      <div className="mb-4 pb-5">
        <label
          htmlFor="EditProfil"
          className="block text-white text-md font-bold mb-2"
        >
          Edit Profil
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="EditProfil"
          type="text"
          placeholder="Edit Profil"
          name="EditProfil"
          value={EditProfil}
          onChange={(event) => setEditProfil(event.target.value)}
        />
      </div>
      <div className="mb-4 pt-2">
        <button
          className="bg-neutral-300 w-full flex justify-center items-center text-white font-bold py-2 px-4 rounded hover:bg-neutral-700"
          onClick={onClick}
        >
          Simpan
        </button>
      </div>
    </>
  );
};
export default EditProfil;
