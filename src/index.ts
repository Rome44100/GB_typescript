import { renderSearchFormBlock } from './render/search-form.js'
import { renderSearchStubBlock } from './render/search-results.js'
import { renderUserBlock } from './render/user.js'
// import { renderToast } from './lib.js'
import { searchHandler } from './libs/search-handler.js';
import { search } from './libs/search.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Nick Cage', '/img/avatar.png', 30);
  renderSearchFormBlock('2021-10-19', '2021-10-19');
  renderSearchStubBlock();

  const searchData = searchHandler();
  search(searchData);
  // renderToast(
  //   {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
  //   {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  // )
});
