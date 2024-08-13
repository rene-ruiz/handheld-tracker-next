"use client";
import Link from "next/link";
import GlobalContainer from "./globalContainer";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border border-b-black">
      <GlobalContainer>
        <div className="flex justify-between h-16 items-center ">
          <Link href={"/"}>
            <button className="text-xl font-bold">PocketTracker</button>
          </Link>
          <div className="flex justify-around space-x-4 font-medium">
            <Link href={"/about"}>
              <button>About</button>
            </Link>
            <Link href={"/signin"}>
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </GlobalContainer>
    </nav>
  );
};

export default Navbar;
