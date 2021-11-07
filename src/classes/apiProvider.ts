import { PlaceCollection } from '../interfaces/placeCollections.js';

export class APIProvider {
  public places: PlaceCollection = [];
  private address = 'http://localhost:3000/places';

  public find(days) {
    return fetch(this.address)
      .then(data => {
        return data.text();
      })
      .then(text => {
        const listObj:object = JSON.parse(text);
        const arr:PlaceCollection = Object.values(listObj);
        return arr;
      })
      .then(list => {
        if (Array.isArray(list)) {
          const diffDays = days ? days : 1;
          return list.map(place => {
            place.totalPrice = place.price * diffDays;
            return place;
          })
        }
        return list;
      });
  }
}