import { FC } from "react";

const Title: FC<{ children: React.ReactNode }> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <h2 className="pb-6 text-2xl items-start text-left font-semibold">
      {children}
    </h2>
  );
};

export default Title;
