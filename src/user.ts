import { renderBlock } from './lib.js';

/**
 * Get username and avatarUrl from localStorage
 * @param {string} user 'user'
 * @returns {unknown}
 */
export function getUserData (user = 'user'): unknown {
  const data = JSON.parse(localStorage.getItem(user));
  return { 
    username: data.username, 
    avatarUrl: data.avatarUrl
  };
}

/**
 * Get favourites amount
 * @param {string} favoritesAmount
 * @returns {unknown}
 */
export function getFavoritesAmount (favoritesAmount = 'favoritesAmount'):unknown {
  return localStorage.getItem(favoritesAmount);
}

export function renderUserBlock (
  userName:string, 
  avaLink: string, 
  favoriteItemsAmount: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  const avatar = avaLink ? avaLink : '/img/avatar.png';
  const name = userName ? userName : 'Empty Name';

  renderBlock(
    'user-block',
    `<div class="header-container">
      <img class="avatar" src="${avatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>`
  )
}
