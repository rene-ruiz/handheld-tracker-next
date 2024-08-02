"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between h-16 px-6 md:px-12 shadow items-center">
        <Link href={"/"}>
          <button className="text-xl font-bold">PocketTrack</button>
        </Link>
        <div className="flex justify-around space-x-4">
          <Link href={"/about"}>
            <button>About</button>
          </Link>
          <button>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
