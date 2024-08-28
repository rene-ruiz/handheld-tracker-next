import { FC, useState } from "react";
import { signIn } from "@/services/authService";
import { OnboardingProp, OnboardingViews } from "@/types/OnboardingViews";
import { useRouter } from "next/navigation";
import { loggedIn } from "@/utils/authHelper";
import { useAuth } from "../context/authContext";

const FormSignIn: FC<OnboardingProp> = ({ setOnboardingViewHandler }) => {
  const router = useRouter();
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  loggedIn();
  const handleSignIn = async () => {
    try {
      const signInResponse = await signIn({ username, password });

      if (signInResponse.success) {
        setMessage("Success: Redirecting to home page");
        login();
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setMessage("Error: Sign in failed");
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again later.");
      console.error("Sign in error:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Sign In</h2>
        <div className="mb-4">
          <label className="block mb-1">
            User name{" "}
            <input
              value={username}
              onChange={(element) => {
                setUsername(element.target.value);
              }}
              type="text"
              className="py-2 px-3 border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-1">
            Password{" "}
            <input
              value={password}
              onChange={(element) => {
                setPassword(element.target.value);
              }}
              type="password"
              className="py-2 px-3 border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </label>
        </div>
        <label className="block text-gray-600">{message}</label>
        <div className="mt-6">
          <button
            onClick={() => handleSignIn()}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-white hover:bg-gray-700 active:bg-gray-700 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-200 disabled:opacity-25 transition"
          >
            Sign In
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => setOnboardingViewHandler(OnboardingViews.SIGN_UP)}
            className="underline"
          >
            Sign up for an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
