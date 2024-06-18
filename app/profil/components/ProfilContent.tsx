"use client";

import React, { useState } from "react";

export const revalidate = 0;

interface ProfilContentProps {
  songs: any[];
  onClick: () => void;
}

const onClick = () => {
  return {};
};

const ProfilContent: React.FC<ProfilContentProps> = ({ songs }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No playlist available</div>;
  }
};

export default ProfilContent;
