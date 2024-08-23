"use client";
import CardHandHeld from "@/components/cardHandHeld";
import Title from "./titles";
import GlobalContainer from "./globalContainer";
import { getConsoleItems } from "@/services/consoleItemsService";
import { ApiResponse } from "@/types/apiTypes";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";

const ContentHome = () => {
  const { isLoggedIn } = useAuth();
  const [handHeldList, setHandHeldList] = useState<ApiResponse["data"]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getConsoleItems();
      if (res.success) {
        setHandHeldList(res.data);
      }
    };
    fetchData();
  }, [isLoggedIn]);

  return (
    <GlobalContainer>
      <main className="items-center md:items-stretch flex flex-col py-12">
        <Title>Game consoles</Title>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-1">
            {handHeldList?.map((handheld) => (
              <CardHandHeld key={handheld.id} handheldData={handheld} />
            ))}
          </div>
        </section>
      </main>
    </GlobalContainer>
  );
};

export default ContentHome;
