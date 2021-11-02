export interface Place {
  id: number,
  name: string,
  description: string,
  image: string,
  remoteness: number,
  bookedDates: string[],
  price: number
}