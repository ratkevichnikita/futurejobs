export interface GiftForVisiting {
  name: string
  options: {
    value: string
    type:string
    description?: string
    day:string
  }[]
}