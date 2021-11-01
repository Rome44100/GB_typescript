import { SearchFormData } from '../interfaces/searchFormData.js';
import { renderSearchResultsBlock } from '../render/search-results.js';
import { PlaceCollection } from '../interfaces/placeCollections.js';

export function search(
  searchData: SearchFormData, 
  callback = ((arg: string | PlaceCollection) => {
    if (typeof arg === 'string') {
      console.log('arg =', arg);
    } else {
      renderSearchResultsBlock(arg);
    }
  })
)
{
  setTimeout(() => {
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
  }, 500);
}