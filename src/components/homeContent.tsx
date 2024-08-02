import CardHandHeld, { HandHeld } from "@/components/cardHandHeld";
import useQuery from "@/hooks/useQuery";

const HomeContent = async () => {
  const handHeldList: HandHeld[] = await useQuery();
  return (
    <>
      <h1>Hello, App</h1>
      {handHeldList.map((handheld, index) => (
        <CardHandHeld key={index} handheldData={handheld} />
      ))}
    </>
  );
};

export default HomeContent;
