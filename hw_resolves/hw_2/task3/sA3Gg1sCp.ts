// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

type Author = { name: string, age: number };
type BookWithAuthors = {
    title: string,
    pageCount: number,
    genre: string;
    authors: Author[]

}

let book_1: BookWithAuthors = {
    title: 'asdasd',
    pageCount: 123213,
    genre: 'music',
    authors: [
        {
            name: 'asdasd',
            age: 20
        },
        {
            name: 'asdasd',
            age: 20
        }
    ]
}
