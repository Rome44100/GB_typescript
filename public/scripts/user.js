import { renderBlock } from './lib.js';
export function renderUserBlock(userName, avaLink, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    const avatar = avaLink ? avaLink : '/img/avatar.png';
    const name = userName ? userName : 'Empty Name';
    renderBlock('user-block', `<div class="header-container">
      <img class="avatar" src="${avatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>`);
}
