export async function fetchPlaces(addr: string) {
  try {
    const response = await fetch(addr);
    const text = await response.text();
    const listObj = JSON.parse(text);
    const res = [];
    if (Object.keys(listObj).length !== 0) {
      for (const i in listObj) {
        res.push(listObj[i]);
      }
    }
    return res;
  } catch (er) {
    throw 'Error' + er;
  }
}