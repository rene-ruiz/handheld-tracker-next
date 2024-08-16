"use client";
import { FC, useState } from "react";
import { signUp } from "@/services/authService";
import { OnboardingProp, OnboardingViews } from "@/types/OnboardingViews";

const FormSignUp: FC<OnboardingProp> = ({ setOnboardingViewHandler }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    signUp({
      username: username,
      email: email,
      password: password,
    }).then(() => {});
  };
  return (
    <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-1">User name</label>
          <input
            value={username}
            onChange={(element) => setUsername(element.target.value)}
            type="text"
            className="py-2 px-3 border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email address</label>
          <input
            value={email}
            onChange={(element) => setEmail(element.target.value)}
            type="email"
            className="py-2 px-3 border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            value={password}
            onChange={(element) => setPassword(element.target.value)}
            type="password"
            className="py-2 px-3 border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
          />
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleSignUp()}
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-white hover:bg-gray-700 active:bg-gray-700 focus:outline-none focus:border-gray-700 focus:ring focus:ring-gray-200 disabled:opacity-25 transition"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => setOnboardingViewHandler(OnboardingViews.SIGN_IN)}
            className="underline"
          >
            Return for sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormSignUp;
