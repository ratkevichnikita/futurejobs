import { AuthStore } from "./AuthStore"
import { createPullstateCore, registerInDevtools } from "pullstate"

export const PullstateCore = createPullstateCore({
  ProfileStore: AuthStore,
})

registerInDevtools({
  ProfileStore: AuthStore,
})
