import { SearchFormData } from '../interfaces/searchFormData.js';
import { renderSearchResultsBlock } from '../render/search-results.js';
import { PlaceCollection } from '../interfaces/placeCollections.js';
import { toggleFavoriteItem } from './toggleFavorite.js';
import { FlatRentSdk } from '../sdk/flat-rent-sdk.js'
import { validateDates } from './validateDates.js';

export function search(
  searchData: SearchFormData, 
  callback = ((arg: string | PlaceCollection) => {
    if (typeof arg === 'string') {
      console.log('arg =', arg);
    } else {
      renderSearchResultsBlock(arg);
      toggleFavoriteItem();
    }
  })
)
{
  setTimeout(() => {
    if (searchData.supplier === 'main') {
      const addr = 'http://localhost:3000/places';
      fetch(addr)
        .then(data => {
          return data.text();
        })
        .then(text => {
          const listObj:object = JSON.parse(text);
          const arr:PlaceCollection = Object.values(listObj);
          return arr;
        })
        .then(list => {
          if (searchData.maxPrice !== '') {
            if(Array.isArray(list)) {
              list = list.filter(el => el.price <= searchData.maxPrice);
            }
          }
          return list;
        })
        .then(arr => {
          if (Math.random() <= 0.5) {
            return callback('Error');
          } else {
            return callback(arr);
          }
        });
    }
    if (searchData.supplier === 'sdk') {
      const sdk = new FlatRentSdk();
      
      const correctDates = validateDates(searchData.dateIn, searchData.dateOut);
      const dateIn = new Date(correctDates.dateInValue);
      const dateOut = new Date(correctDates.dateOutValue);
      
      sdk.search({
        city: 'Санкт-Петербург',
        checkInDate: dateIn,
        checkOutDate: dateOut,
        priceLimit: Number(searchData.maxPrice)
      })
        .then((result) => {
          console.log('sdk result = ', result);
          if (Array.isArray(result)) {
            callback(result);
          }
        })
    }
  }, 500);
}