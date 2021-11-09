import { FavPlaceCollection } from '../interfaces/favPlaceCollection.js';
import { UserData } from '../interfaces/userData.js';

export function setFirstStorageState () {
  const favoritesAmount = localStorage.getItem('favoritesAmount');
  if (favoritesAmount === null) {
    localStorage.setItem('favoritesAmount', '');
    localStorage.setItem('favItems', '');
    localStorage.setItem('user', '');
  }
}

/**
 * Get username and avatarUrl from localStorage
 * @param {string} user 'user'
 * @returns {UserData}
 */
export function getUserData (user = 'user'): UserData {
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
export function getFavoritesAmount (favoritesAmount = 'favoritesAmount'):number {
  const num = parseInt(localStorage.getItem(favoritesAmount));
  return Number.isNaN(num) ? 0 : num;
}

export function setFavAmount (cnt = 0, favoritesAmount = 'favoritesAmount'):void {
  localStorage.setItem(favoritesAmount, String(cnt));
}

export function setFavItems (obj: object, favItems = 'favItems'):void {
  localStorage.setItem(favItems, JSON.stringify(obj));
}

export function getFavItems (favItems = 'favItems'):object {
  const str = localStorage.getItem(favItems);
  return str === '' ? {} : JSON.parse(str);
}

export function checkFavItemInStorage (id:string):boolean {
  const itemsObj = getFavItems();
  const arrItems:FavPlaceCollection = Object.values(itemsObj);
  let item = null;
  if(Array.isArray(arrItems)) {
    item = arrItems.find(el => id === el.favid);
  }
  return item ? true : false;
}

export function removeItem (id:string):void {
  const itemsObj = getFavItems();
  const arrItems:FavPlaceCollection = Object.values(itemsObj);
  let newItems = [];
  if(Array.isArray(arrItems)) {
    newItems = arrItems.filter(el => {
      if (el.favid !== id) {
        return el;
      }
    });
  }
  const retItemsObj: { [key: string]: object } = {};
  newItems.forEach((el, idx) => retItemsObj[idx] = el );
  setFavItems(retItemsObj);
}