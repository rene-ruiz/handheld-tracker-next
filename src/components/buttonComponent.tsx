"use client";
import { FC } from "react";
import { IconFavoriteHeart } from "./iconFavorite";
import { modifyData } from "@/hooks/useApiActions";
import { CardHandHeldProps } from "./cardHandHeld";

export const ButtonComponent: FC<CardHandHeldProps> = ({ handheldData }) => {
  const { id, obtained } = handheldData;
  const handleFavorite = () => {
    modifyData(id, { obtained: !obtained });
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-end p-2">
      <button onClick={handleFavorite}>
        <IconFavoriteHeart fill={obtained ? "red" : ""} />
      </button>
    </div>
  );
};
