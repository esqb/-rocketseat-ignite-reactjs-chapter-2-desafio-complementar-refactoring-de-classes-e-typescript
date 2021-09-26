export interface FoodEdit {
  id: number
  name: string
  description: string
  price: string
  available: boolean
  image: string
}

export type IAddFood = Omit<FoodEdit, 'id'>
