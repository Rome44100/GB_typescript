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