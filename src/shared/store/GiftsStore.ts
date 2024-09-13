import { Store } from "pullstate"
import {GiftForVisiting} from "@/src/shared/types/Gifts";

interface GiftsStoreProps {
  giftsVisiting: GiftForVisiting[] | []
  giftsVisitingModalActive: boolean
}

export const setGiftsVisitingModalActive = (value: any) => {
  GiftsStore.update((store) => {
    store.giftsVisitingModalActive = value
  })
}


export const GiftsStore = new Store<GiftsStoreProps>({
  giftsVisiting: [],
  giftsVisitingModalActive: false
})