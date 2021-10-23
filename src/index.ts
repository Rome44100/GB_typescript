class Book {
    name: string;
    genre: string;
    pageAmount: number;
    constructor (name: string, genre: string, pageAmount: number) {
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}

const books = [
    new Book('Harry Potter', 'fantasy', 980),
    new Book('Charles Dickens. Great expectations', 'novel', 800),
    new Book('Steve McConnell. Code complete', 'education', 896),
    new Book('Aditya Bhargava. Grokking Algorithms', 'education', 288),
];

/**
 * @param {string} genre 
 * @param {number} limit 
 * @returns {Book}
 */
function findSuitableBook (genre: string, limit: number, multy = true): Book|Book[] {
    const findAlrorythm = (book) => {
        return book.genre === genre && book.pageAmount <= limit;
    }

    if (multy) {
        return books.filter(findAlrorythm);
    } else {
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
} else {
    console.log(recomedBook[0].name);
}