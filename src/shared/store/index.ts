import { AuthStore } from "./AuthStore"
import { createPullstateCore, registerInDevtools } from "pullstate"
import {GiftsStore} from "./GiftsStore";

export const PullstateCore = createPullstateCore({
  AuthStore,
  GiftsStore,
})

registerInDevtools({
   AuthStore,
  GiftsStore
})
