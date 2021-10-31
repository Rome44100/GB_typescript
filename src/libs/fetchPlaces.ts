// import { Place } from '../interfaces/place.js';
interface Place {
  id: number,
  name: string,
  description: string,
  image: string,
  remoteness: number,
  bookedDates: string[],
  price: number
}

interface Places {
  [key: number]: Place
}

class FetchPlaces {
  arr = [];
  constructor(addr: string) {
    if(addr !== '') {
      fetch(addr)
        .then(data => {
          return data.text();
        })
        .then(text => {
          const listObj:object = JSON.parse(text);
          if (Object.keys(listObj).length !== 0) {
            // Object.keys(listObj).forEach(key => {
            //   this.arr.push(listObj[key]);
            // });
            for (const k in listObj) {
              this.arr.push(listObj[k]);
            }
          }
        });
    }
  }
  get() {
    return this.arr;
  }
}

export function fetchPlaces(addr: string):object[] {
  const result = new FetchPlaces(addr);
  return result.get();
}