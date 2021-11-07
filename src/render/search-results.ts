import { renderBlock } from '../libs/lib.js'
import { PlaceCollection } from '../interfaces/placeCollections.js'
import { checkFavItemInStorage } from '../libs/userData.js';

export function renderSearchStubBlock () {
  renderBlock(
    'search-results-block',
    `<div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>`
  )
}

export function renderEmptyOrErrorSearchBlock (reasonMessage) {
  renderBlock(
    'search-results-block',
    `<div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>`
  )
}

export function renderSearchResultsBlock (list: PlaceCollection): void {
  let resList = '';
  if (Array.isArray(list)) {
    if (list.length > 0) {
      resList += '<ul class="results-list">';
      let favActive = false;
      for (let i = 0; i < list.length; i++) {
        favActive = checkFavItemInStorage(String(list[i].id));
        resList += `<li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites${favActive?' active':''}" data-favId="${list[i].id}" data-favName="${list[i].name}" data-favImg="${list[i].image}"></div>
            <img class="result-img" src="${list[i].image}" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>${list[i].name}</p>
              <p class="price">${list[i].totalPrice}&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> ${list[i].remoteness} км от вас</div>
            <div class="result-info--descr">${list[i].description}.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>`;
      }
      resList += '</ul>';

      renderBlock(
        'search-results-block',
        `<div class="search-results-header">
              <p>Результаты поиска</p>
              <div class="search-results-filter">
                  <span><i class="icon icon-filter"></i> Сортировать:</span>
                  <select id="sortResults">
                      <option selected>Сначала дешёвые</option>
                      <option>Сначала дорогие</option>
                      <option>Сначала ближе</option>
                  </select>
              </div>
          </div>
          ${resList}`
      )
    } else {
      renderSearchStubBlock();
    }
  }
}