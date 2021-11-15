import { 
  getFavoritesAmount,
  setFavAmount,
  setFavItems,
  getFavItems,
  removeItem
} from './userData.js';
import { renderUserBlock } from '../render/user.js';

export function toggleFavoriteItem () {
  const placeList = document.querySelectorAll('.favorites');
  placeList.forEach((value) => {
    const el = value as HTMLDivElement;
    el.addEventListener('click', () => {
      let favAmount = 0;
      if (!el.classList.contains('active')) {
        favAmount = getFavoritesAmount();
        if (favAmount === 0) {
          setFavAmount(1);
        } else {
          setFavAmount(++favAmount);
        }
        const favItemsObj:object = getFavItems();
        const arrItems = Object.values(favItemsObj);
        arrItems.push({
          favid: el.dataset['favid'],
          favimg: el.dataset['favimg'],
          favname: el.dataset['favname']
        });
        const retItemsObj: { [key: string]: object } = {};
        arrItems.forEach((el, idx) => retItemsObj[idx] = el );
        setFavItems(retItemsObj);
        // console.log(el.dataset.favid, el.dataset.favimg, el.dataset.favname);
        el.classList.add('active');
      } else {
        favAmount = getFavoritesAmount();
        if(favAmount > 0) {
          setFavAmount(--favAmount);
        }
        if (el.dataset['favid'] !== undefined) {
          removeItem(el.dataset['favid']);
          el.classList.remove('active');
        }
      }
      // Вызывать рендер в таком виде и в этом месте - по-моему, беда
      // но ради скорости другого выбора нет
      renderUserBlock('Nick Cage', '/img/avatar.png', getFavoritesAmount());
    })
  });
}