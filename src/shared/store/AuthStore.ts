import { Store } from "pullstate"
import {FirebaseUser} from "@/shared/types/FirebaseUser";

interface AuthStoreProps {
  user: FirebaseUser | null
  loading: boolean
  authModalActive: boolean
  authModalContent: 'login' | 'register' | null
  userData: any
}

export const storeSetModalActive = (value: boolean) => {
  AuthStore.update((store) => {
    store.authModalActive = value
  })
}

export const storeSetModalContent = (value: 'login' | 'register' | null) => {
  AuthStore.update((store) => {
    store.authModalContent = value
  })
}

export const SetUserAuth = (value: FirebaseUser | null) => {
  AuthStore.update((store) => {
    store.user = value
  })

}

export const serUserData = (value: any) => {
  AuthStore.update((store) => {
    store.userData = value
  })
}

export const setAuthLoading = (value: any) => {
  AuthStore.update((store) => {
    store.loading = value
  })
}

export const AuthStore = new Store<AuthStoreProps>({
  user: null,
  loading: false,
  authModalActive: false,
  authModalContent: null
})
