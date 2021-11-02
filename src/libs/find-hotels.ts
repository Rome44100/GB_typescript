import { search } from './search.js';
import { searchHandler } from './search-handler.js';

export function findHotels() {
  const buttonFind = document.getElementById('button-find');
  buttonFind.addEventListener('click', ev => {
    ev.preventDefault();

    const searchData = searchHandler();
    search(searchData);
  });
}