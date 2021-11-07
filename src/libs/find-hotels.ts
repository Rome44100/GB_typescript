import { search } from './search.js';
import { searchHandler } from './search-handler.js';

export function findHotels() {
  const buttonFind = document.getElementById('button-find');
  buttonFind.addEventListener('click', ev => {
    ev.preventDefault();

    const searchData = searchHandler();
    if (document.getElementById('sortResults') as HTMLSelectElement) {
      searchData.sortResults = (document.getElementById('sortResults') as HTMLSelectElement).selectedIndex;
    }
    search(searchData);
  });
}