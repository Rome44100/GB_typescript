import { Place } from '../interfaces/place.js';

export function search(
  searchData: object, 
  callback = ((arg: string | Place) => { console.log(arg); })
)
{
  setTimeout(() => {
    console.log(searchData, callback);
    if (Math.random() <= 0.5) {
      throw 'Error';
    } else {
      return [];
    }
  }, 500);
}