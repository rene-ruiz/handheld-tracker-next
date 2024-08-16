"use client";
import GlobalContainer from "./globalContainer";
import { FC, useMemo, useState } from "react";
import FormSignIn from "./formSignIn";
import { OnboardingViews } from "@/types/OnboardingViews";
import FormSignUp from "./formSignUp";

const ContentOnboarding: FC = () => {
  const [onboardingViewHandler, setOnboardingViewHandler] = useState(
    OnboardingViews.SIGN_IN,
  );

  const handleView = useMemo(() => {
    switch (onboardingViewHandler) {
      case OnboardingViews.SIGN_IN:
        return (
          <FormSignIn setOnboardingViewHandler={setOnboardingViewHandler} />
        );
      case OnboardingViews.SIGN_UP:
        return (
          <FormSignUp setOnboardingViewHandler={setOnboardingViewHandler} />
        );
      default:
        <FormSignIn setOnboardingViewHandler={setOnboardingViewHandler} />;
    }
  }, [onboardingViewHandler, setOnboardingViewHandler]);

  return <GlobalContainer>{handleView}</GlobalContainer>;
};

export default ContentOnboarding;
