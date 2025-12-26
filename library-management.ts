// library.ts
enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Science = "Science"
}

type Book = {
    title: string;
    author: string;
    genre: Genre;
};

const library: Book[] = [
    { title: "Atomic Habits", author: "James Clear", genre: Genre.NonFiction },
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: Genre.Fiction }
];

function listBooksByGenre(targetGenre: Genre): void {
    const filtered = library.filter(book => book.genre === targetGenre);
    console.log(`--- ${targetGenre} Books ---`);
    console.table(filtered);
}

listBooksByGenre(Genre.NonFiction);