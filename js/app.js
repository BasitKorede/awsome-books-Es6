import exportNav from './modules/nav-bar.js';
import { BookStore, generateId } from './modules/book-store.js';
import Book from './modules/book.js';
import { today } from './modules/time.js';

const initialBooks = [
  {
    title: 'the boy with wings',
    author: 'Basit Korede',
    id: generateId(),
  },

  {
    title: 'Think Pythone',
    author: 'korede Basit',
    id: generateId(),
  },
];

const bookStore = new BookStore(initialBooks);

const handleRemove = ({ target: { id } }) => {
  if (bookStore.remove(id)) {
    const removeButton = document.getElementById(id);
    removeButton.parentElement.parentElement.remove();
  }
};

// Display book function:
// 1. accepts an object with {id, author, title}
// 2. creates a li element and populates the objects with it
// 3. query the ul element and appends the li to it
const displayBook = ({ title, author, id }, parentElement) => {
  const bookListItemElement = document.createElement('li');
  bookListItemElement.className = 'book-list-item';
  bookListItemElement.innerHTML = `
      <section class="book-store-section display-flex">
        <div class="display-flex">
          <h3>"${title}"</h3>&nbsp;
          <span>by</span>&nbsp;
          <p class="paragraph">${author}</p>
        </div>
        <button id="${id}" type="button" class="remove-button">Remove</button>
      </section>`;
  parentElement.appendChild(bookListItemElement);
  bookListItemElement.querySelector(`button#${id}`).addEventListener('click', handleRemove);
};

const bookListElement = document.querySelector('ul.book-list');

const books = bookStore.all();

const handleSubmition = (event) => {
  event.preventDefault();
  const title = document.querySelector('.title-input').value;
  const author = document.querySelector('.author-input').value;
  const id = generateId();
  const clearField = document.querySelectorAll('input');
  clearField.forEach((input) => {
    input.value = '';
  });
  const newBook = new Book({ title, author, id });
  if (bookStore.add(newBook)) {
    displayBook(newBook, bookListElement);
  }
};

const startApp = () => {
  exportNav();
  document.getElementById('current-time').innerHTML = today;

  books.forEach((book) => {
    displayBook(book, bookListElement);
  });

  const formElement = document.querySelector('#book-form');
  formElement.addEventListener('submit', handleSubmition);
};

export default startApp;