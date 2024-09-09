export interface FirebaseUser {
  accessToken: string
  displayName: string | null
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManager;
  phoneNumber: string | null
  photoUrl: string | null
  metaData: {
    createdAt: string;
    lastLoginAt: string;
  }
  apiKey: string
  tenantId: null | string
}

interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string | null;
  email: string;
  phoneNumber: string | null;
  photoURL: string | null;
}

interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
