import { Book } from './book.js';
import { books } from './book-collection.js';
/**
 * @param {string} genre
 * @param {number} limit
 * @returns {Book}
 */
function findSuitableBook(genre, limit, multy = true) {
    const findAlrorythm = (book) => {
        return book.genre === genre && book.pageAmount <= limit;
    };
    if (multy) {
        return books.filter(findAlrorythm);
    }
    else {
        return books.find(findAlrorythm);
    }
}
console.log(findSuitableBook('education', 900));
// console.log(findSuitableBook('education', 800));
// console.log(findSuitableBook('education', 2000));
// console.log(findSuitableBook('education', 900));
const recomedBook = findSuitableBook('fantasy', 1000);
if (recomedBook instanceof Book) {
    console.log(recomedBook.name);
}
else {
    console.log(recomedBook[0].name);
}
