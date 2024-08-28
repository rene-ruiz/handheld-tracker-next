import Link from "next/link";
import GlobalContainer from "./globalContainer";
import { useAuth } from "../context/authContext";
import { signOut } from "@/services/authService";
import { getRefresh } from "@/utils/authHelper";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();
  const logoutHandler = () => {
    signOut({ refresh_token: getRefresh() }).then(() => {
      logout();
      router.push("/");
    });
  };
  return (
    <nav className="w-full bg-white border border-b-gray-400">
      <GlobalContainer>
        <div className="flex justify-between h-16 items-center ">
          <Link href={"/"}>
            <button className="text-xl font-bold">PocketTracker</button>
          </Link>
          <div className="flex justify-around space-x-4 font-medium">
            <Link href={"/about"}>
              <button>About</button>
            </Link>
            {!isLoggedIn ? (
              <Link href={"/signin"}>
                <button>Sign In</button>
              </Link>
            ) : (
              <button onClick={() => logoutHandler()}>Logout</button>
            )}
          </div>
        </div>
      </GlobalContainer>
    </nav>
  );
};

export default Navbar;
