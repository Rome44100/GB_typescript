import { PlaceCollection } from '../interfaces/placeCollections.js'
import { renderSearchResultsBlock } from '../render/search-results.js'

export function fetchPlaces(addr: string) {
  fetch(addr)
    .then(data => {
      return data.text();
    })
    .then(text => {
      const listObj:object = JSON.parse(text);
      const arr:PlaceCollection = Object.values(listObj);
      renderSearchResultsBlock(arr);
    });
}