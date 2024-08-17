import { FC } from "react";
import { ButtonComponent } from "./buttonComponent";
import { CardHandHeldProps } from "@/types/handheld";

const CardHandHeld: FC<CardHandHeldProps> = ({ handheldData }) => {
  return (
    <article className="mb-6 flex flex-col rounded-lg bg-white shadow-md h-96 w-64 md:w-80 lg:w-72 xl:w-64">
      <div className="relative overflow-hidden rounded-t-lg bg-clip-border">
        <img
          src={handheldData.image}
          alt={handheldData.name}
          className="object-cover h-60 w-full"
        />
        <ButtonComponent handheldData={handheldData} />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {handheldData.name}
        </h2>
        <p className="text-sm text-gray-600">
          Retail price:{" "}
          {handheldData.original_price
            ? `$${handheldData.original_price}`
            : "--"}
        </p>
        <p className="mt-2 text-xs text-gray-700 line-clamp-4">
          {handheldData.description}
        </p>
      </div>
    </article>
  );
};

export default CardHandHeld;
