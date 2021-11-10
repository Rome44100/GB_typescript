export interface SDK {
  search(parameters: {
    city: string;
    checkInDate: Date;
    checkOutDate: Date;
    priceLimit?: number;
  }): Promise<unknown>
}

export interface DBsdk {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates?: number[],
  bookedDates: string[],
  price: number,
  totalPrice: number
}