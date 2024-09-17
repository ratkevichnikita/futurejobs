import { Store } from "pullstate"

interface ChatStoreProps {
  ChatModalActive: boolean
}

export const setChatModalActive = (value: any) => {
  ChatStore.update((store) => {
    store.ChatModalActive = value
  })
}


export const ChatStore = new Store<ChatStoreProps>({
  ChatModalActive: false
})