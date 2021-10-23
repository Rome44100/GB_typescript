// class Book {
//     constructor (name, genre, pageAmount) {
//         this.name = name;
//         this.genre = genre;
//         this.pageAmount = pageAmount;
//     }
// }

// const books = [
//     new Book('Harry Potter', 'fantasy', 980),
//     new Book('Charles Dickens. Great expectations', 'novel', 800),
//     new Book('Steve McConnell. Code complete', 'education', 896),
//     new Book('Aditya Bhargava. Grokking Algorithms', 'education', 288),
// ];

// function findSuitableBook (genre, limit) {
//     return books.find(book => {
//         return book.genre === genre && book.pageAmount <= limit;
//     });
// }

// console.log(findSuitableBook('education', 900));
// console.log(findSuitableBook('education', '900'));
// console.log(findSuitableBook('education'));
// console.log(findSuitableBook(900, 'education'));
// console.log(findSuitableBook(900));
// console.log(findSuitableBook());