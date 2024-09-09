import {SetUserAuth, storeSetModalActive, storeSetModalContent} from "@/src/shared/store/AuthStore";
import {FirebaseUser} from "@/src/shared/types/FirebaseUser";

export const setAuthData = (user:FirebaseUser) => {
  localStorage.setItem('accessToken', user.accessToken);
  storeSetModalContent(null);
  storeSetModalActive(false);
  SetUserAuth(user);
}