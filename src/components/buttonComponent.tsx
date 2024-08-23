import { FC, useState } from "react";
import { IconFavoriteHeart } from "./iconFavorite";
import { addFavorite } from "@/services/consoleItemsService";
import { CardHandHeldProps } from "@/types/handheld";

enum Action {
  ADDED = "added",
  REMOVED = "removed",
}

export const ButtonComponent: FC<CardHandHeldProps> = ({ handheldData }) => {
  const { id, is_favorite } = handheldData;
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFavorite = () => {
    addFavorite({ console_item: id }).then((res) => {
      if (res.success && res.data.action === Action.ADDED) {
        handheldData.is_favorite = true;
      } else if (res.success && res.data.action === Action.REMOVED) {
        handheldData.is_favorite = false;
      }
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
        <IconFavoriteHeart fill={is_favorite ? "red" : ""} />
      </button>
    </div>
  );
};
