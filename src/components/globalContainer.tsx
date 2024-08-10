import { FC } from "react";

const GlobalContainer: FC<{ children: React.ReactNode }> = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="container mx-auto px-8 md:px-12">{children}</div>;
};

export default GlobalContainer;
