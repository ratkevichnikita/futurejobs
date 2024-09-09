import {User} from "firebase/auth";

export interface  FirebaseUser extends User {
  accessToken?: string | undefined
  uid: string
  stsTokenManager?: StsTokenManager;
  photoUrl?: string | null
  apiKey?: string | undefined
}

interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
