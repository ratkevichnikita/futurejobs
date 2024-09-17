import { AuthStore } from "./AuthStore"
import { createPullstateCore, registerInDevtools } from "pullstate"
import {GiftsStore} from "./GiftsStore";
import {ChatStore} from "./ChatStore";

export const PullstateCore = createPullstateCore({
  AuthStore,
  GiftsStore,
  ChatStore
})

registerInDevtools({
   AuthStore,
  GiftsStore,
  ChatStore
})
