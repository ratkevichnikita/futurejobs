export interface GiftForVisiting {
  name: string
  isAllClaimed?: boolean
  options: GiftForVisitingOption[]
}

export interface GiftForVisitingOption {
  value: string
  type:string
  day:string
  description?: string
  claimed?: boolean
  toClaim?: boolean
}

export interface ClaimGiftParams {
  userId: string,
  day: number,
  userData: any,
  name: string,
  gift: {
    value: string
    type: string
    day: string
  }
}