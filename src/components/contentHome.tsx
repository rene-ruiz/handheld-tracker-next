import CardHandHeld from "@/components/cardHandHeld";
import Title from "./titles";
import GlobalContainer from "./globalContainer";
import { getConsoleItems } from "@/services/consoleItemsService";
import { ApiResponse } from "@/types/apiTypes";

const ContentHome = async () => {
  const handHeldList: ApiResponse = await getConsoleItems();
  return (
    <GlobalContainer>
      <main className="items-center md:items-stretch flex flex-col py-12">
        <Title>Game consoles</Title>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1">
            {handHeldList.data?.map((handheld, index) => (
              <CardHandHeld key={index} handheldData={handheld} />
            ))}
          </div>
        </section>
      </main>
    </GlobalContainer>
  );
};

export default ContentHome;
