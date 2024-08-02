import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full sticky top-[100vh] bg-black text-white">
      <div className="items-center justify-center text-center min-h-24 flex flex-col">
        <div className="text-lg mb-2">
          <Link href="/">PocketTracker</Link>
        </div>
        <div id="links" className="flex flex-row text-sm items-start gap-4">
          <div>LinkedIn</div>
          <div>Github</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
