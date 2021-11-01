import { renderSearchFormBlock } from './render/search-form.js'
import { renderSearchStubBlock } from './render/search-results.js'
import { renderUserBlock } from './render/user.js'
// import { renderToast } from './lib.js'
import { findHotels } from './libs/find-hotels.js';
import { search } from './libs/search.js';
import { searchHandler } from './libs/search-handler.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Nick Cage', '/img/avatar.png', 30);
  renderSearchFormBlock('2021-11-05', '2021-11-20');
  renderSearchStubBlock();

  search(searchHandler());

  findHotels();

  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
});
