import { SearchFormData } from '../interfaces/searchFormData.js';
import { renderSearchResultsBlock } from '../render/search-results.js';
import { PlaceCollection } from '../interfaces/placeCollections.js';
import { toggleFavoriteItem } from './toggleFavorite.js';
import { validateDates } from './validateDates.js';
import { APIProvider } from '../classes/apiProvider.js';
import { SDKProvider } from '../classes/sdkProvider.js';
import { Place } from '../interfaces/place.js';

function renderOrLog(arg: string | PlaceCollection):void {
  if (typeof arg === 'string') {
    console.log('arg =', arg);
  } else {
    renderSearchResultsBlock(arg);
    toggleFavoriteItem();
  }
}

function sortByPrice(one: Place, two: Place) {
  if (one.price > two.price) {
    return 1
  } else if (one.price < two.price) {
    return -1
  } else {
    return 0
  }
}

export function search(searchData: SearchFormData, callback = renderOrLog) {
  setTimeout(() => {
    const correctDates = validateDates(searchData.dateIn, searchData.dateOut);
    const dateIn = new Date(correctDates.dateInValue);
    const dateOut = new Date(correctDates.dateOutValue);
    
    const apiList = new APIProvider();

    // не знаю как лучше - с параметрами или без вызывать методы или конструкторы...
    const sdkList = new SDKProvider('Санкт-Петербург', dateIn, dateOut, searchData.maxPrice);

    Promise.all([
      apiList.find(correctDates.diffDays),
      sdkList.find()
    ])
      .then(results => {
        let allResults: PlaceCollection = [].concat(results[0], results[1]);

        if (searchData.maxPrice !== '') {
          if(Array.isArray(allResults)) {
            if (searchData.sortResults === 0) {
              allResults.sort(sortByPrice);
            } else if (searchData.sortResults === 1) {
              allResults.sort(sortByPrice).reverse;
              allResults = allResults.reverse();
            }
          }
          // Вот здесь, если в предыдущей ветке if allResults.filter делать, то пишет ошибку
          // что нет свойства filter в типе PlaceCollection
          // это для меня вопрос??? :)
          if (Array.isArray(allResults)) {
            allResults = allResults.filter(el => el.totalPrice <= searchData.maxPrice);
          }
        }

        if (Math.random() <= 0.5) {
          return callback('Error');
        } else {
          return callback(allResults);
        }
      })
  }, 500);
}