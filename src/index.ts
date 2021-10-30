import { renderSearchFormBlock } from './render/search-form.js'
import { renderSearchStubBlock, renderSearchResultsBlock } from './render/search-results.js'
import { renderUserBlock } from './render/user.js'
// import { renderToast } from './lib.js'
import { searchHandler } from './libs/search-handler.js';
import { search } from './libs/search.js'
import { fetchPlaces } from './libs/fetchPlaces.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Nick Cage', '/img/avatar.png', 30);
  renderSearchFormBlock('2021-10-31', '2021-11-20');
  renderSearchStubBlock();

  const searchData = searchHandler();
  search(searchData);

  const listPlaces = fetchPlaces('http://localhost:3000/places');
  
  renderSearchResultsBlock(listPlaces);
  
  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
});
