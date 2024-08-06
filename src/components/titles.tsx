const Title = ({
  content,
}: Readonly<{
  content: React.ReactNode;
}>) => {
  return <h2 className="py-6 text-2xl items-start text-left">{content}</h2>;
};

export default Title;
