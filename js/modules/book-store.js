import Book from './book.js';

export const generateId = () => `id_${Math.random().toString(36).slice(2)}`;

export class BookStore {
  constructor(initialData = []) {
    this.saveToLocalStorage = (data) => {
      const booksString = JSON.stringify(data);
      localStorage.setItem('bookStoreData', booksString);
      return true;
    };

    const rawBooksData = localStorage.getItem('bookStoreData');
    if (rawBooksData) {
      this.books = JSON.parse(rawBooksData);
    } else {
      this.books = initialData;
      this.saveToLocalStorage(this.books);
    }
  }

  all() {
    return this.books;
  }

  add(newData) {
    if (!newData || !newData.id) {
      return false;
    }

    const newBook = new Book(newData);
    this.books.push(newBook);
    return this.saveToLocalStorage(this.books);
  }

  remove(id) {
    this.books = this.books.filter((book) => book.id !== id);
    return this.saveToLocalStorage(this.books);
  }
}
