import { Store } from "pullstate"
import {FirebaseUser} from "@/shared/types/FirebaseUser";

interface AuthStoreProps {
  user: FirebaseUser
  loading: boolean
  authModalActive: boolean
  authModalContent: 'login' | 'register' | null
}

export const storeSetModalActive = (value: boolean) => {
  AuthStore.update((store) => {
    store.authModalActive = value
  })
}

export const storeSetModalContent = (value: string | null) => {
  AuthStore.update((store) => {
    store.authModalContent = value
  })
}

export const SetUserAuth = (value: FirebaseUser) => {
  AuthStore.update((store) => {
    store.user = value
  })
}

export const AuthStore = new Store<AuthStoreProps>({
  user: null,
  loading: false,
  authModalActive: false,
  authModalContent: null
})
