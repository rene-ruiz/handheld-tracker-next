"use client";
import { FC, useState } from "react";
import { IconFavoriteHeart } from "./iconFavorite";
import { modifyData } from "@/hooks/useApiActions";
import { CardHandHeldProps, HandHeld } from "./cardHandHeld";

export const ButtonComponent: FC<CardHandHeldProps> = ({ handheldData }) => {
  const { id, obtained } = handheldData;
  const [obtainedFavorite, setObtained] = useState(obtained);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFavorite = () => {
    modifyData(id, { obtained: !obtainedFavorite }).then((res: HandHeld) => {
      setObtained(res.obtained);
    });
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-end p-2">
      <button
        onClick={handleFavorite}
        className={`${isAnimating && "animate-ping"}`}
      >
        <IconFavoriteHeart fill={obtainedFavorite ? "red" : ""} />
      </button>
    </div>
  );
};
