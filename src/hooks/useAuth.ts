import {
  signUp,
  signIn,
  userInfo,
  logout,
  tokenRefresh,
} from "../services/authService";

const useAuth = () => {
  return { signUp, signIn, userInfo, logout, tokenRefresh };
};

export default useAuth;
