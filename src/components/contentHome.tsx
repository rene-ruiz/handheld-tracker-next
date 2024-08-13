import CardHandHeld, { HandHeld } from "@/components/cardHandHeld";
import Title from "./titles";
import GlobalContainer from "./globalContainer";
import { useQuery } from "@/hooks/useQuery";

const ContentHome = async () => {
  const handHeldList: HandHeld[] = await useQuery();
  return (
    <GlobalContainer>
      <main className="items-center md:items-stretch flex flex-col py-12">
        <Title>Game consoles</Title>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1">
            {handHeldList.map((handheld, index) => (
              <CardHandHeld key={index} handheldData={handheld} />
            ))}
          </div>
        </section>
      </main>
    </GlobalContainer>
  );
};

export default ContentHome;
