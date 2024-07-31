"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href={"/"}>
          <button>PocketTrack</button>
        </Link>
        <div>
          <ul>
            <li>
              <Link href={"/"}>
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <button>About</button>
              </Link>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
