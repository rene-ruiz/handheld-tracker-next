import CardHandHeld, { HandHeld } from "@/components/cardHandHeld";
import { useQuery } from "@/hooks/useApiActions";
import Title from "./titles";

const HomeContent = async () => {
  const handHeldList: HandHeld[] = await useQuery();
  return (
    <div className="container mx-auto p-6 md:px-12 items-center md:items-stretch flex flex-col">
      <Title content={"Hand held game consoles"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1">
        {handHeldList.map((handheld, index) => (
          <CardHandHeld key={index} handheldData={handheld} />
        ))}
      </div>
    </div>
  );
};

export default HomeContent;
