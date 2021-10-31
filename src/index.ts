import { renderSearchFormBlock } from './render/search-form.js'
import { renderSearchStubBlock } from './render/search-results.js'
import { renderUserBlock } from './render/user.js'
// import { renderToast } from './lib.js'
import { findHotels } from './libs/find-hotels.js';
import { fetchPlaces } from './libs/fetchPlaces.js';
import { renderSearchResultsBlock } from './render/search-results.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Nick Cage', '/img/avatar.png', 30);
  renderSearchFormBlock('2021-11-05', '2021-11-20');
  renderSearchStubBlock();
  
  findHotels();

  const listPlaces = fetchPlaces('http://localhost:3000/places');
  renderSearchResultsBlock(listPlaces);

  // const buttonFind = document.getElementById('button-find');
  // buttonFind.addEventListener('click', ev => {
  //   ev.preventDefault();
  //   // renderSearchResultsBlock(fetchPlaces(''));
  //   // setTimeout(() => {
  //   //   renderSearchResultsBlock(listPlaces);
  //   // }, 500);
  // });

  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
});
