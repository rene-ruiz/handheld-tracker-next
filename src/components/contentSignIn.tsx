"use client";
import Title from "./titles";
import GlobalContainer from "./globalContainer";
import { FC } from "react";
import { signIn, signUp } from "@/services/authService";

const ContentSignIn: FC = () => {
  const handleSignup = () => {
    signUp({}).then(() => {});
  };
  const handleSignIn = () => {
    signIn({}).then(() => {});
  };
  return (
    <GlobalContainer>
      <main className="items-center md:items-stretch flex flex-col py-12">
        <Title>Sign In</Title>
        <section>
          <div>
            <span>email</span>
            <input type="text" />
          </div>
          <div>
            <span>Password</span>
            <input type="password" />
          </div>
          <div>
            <button onClick={handleSignIn}>Submit</button>
          </div>
        </section>
        <Title>Signup</Title>
        <section>
          <div>
            <span>username</span>
            <input type="text" />
          </div>
          <div>
            <span>email</span>
            <input type="text" />
          </div>
          <div>
            <span>password</span>
            <input type="password" />
          </div>
          <div>
            <button onClick={handleSignup}>Submit</button>
          </div>
        </section>
      </main>
    </GlobalContainer>
  );
};

export default ContentSignIn;
