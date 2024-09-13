export interface GiftForVisiting {
  name: string
  isAllClaimed?: boolean
  options: {
    value: string
    type:string
    description?: string
    day:string
    claimed: boolean
    toClaim: boolean
  }[]
}