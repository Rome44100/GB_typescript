import { FlatRentSdk } from '../sdk/flat-rent-sdk.js'

export class SDKProvider {
  private sdk = null;
  constructor(private city = 'Санкт-Петербург',
    private checkInDate = new Date(),
    private checkOutDate = new Date(),
    private priceLimit = null)
  {
    this.sdk = new FlatRentSdk();
  }

  public find() {
    return this.sdk.search({
      city: this.city,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      priceLimit: Number(this.priceLimit)
    })
      .then(result => {
        if (Array.isArray(result)) {
          return result.map(elem => {
            delete elem.coordinates; // TODO: надо высчитывать из координать близость
            return {
              bookedDates: elem.bookedDates,
              description: elem.details,
              id: elem.id,
              image: elem.photos[0],
              name: elem.title,
              price: elem.price,
              remoteness: 1.2,
              totalPrice: elem.totalPrice
            }
          })
        } else {
          return [];
        }
      });
  }
}