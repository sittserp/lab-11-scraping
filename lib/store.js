const Book = require('./Book');
const store = books => {
  return Promise.all(books.map(book => Book.insert(book)));
};
  
module.exports = store;
