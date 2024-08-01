import CardHandHeld, { HandHeld } from "@/components/cardHandHeld";
import useQuery from "@/hooks/useQuery";

const Page = async () => {
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

export default Page;
