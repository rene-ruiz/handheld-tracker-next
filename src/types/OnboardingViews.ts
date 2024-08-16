export enum OnboardingViews {
  SIGN_IN = "signIn",
  SIGN_UP = "signUp",
}

export type OnboardingProp = {
  setOnboardingViewHandler: (value: OnboardingViews) => void;
};
