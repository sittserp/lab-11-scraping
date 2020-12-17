
const parse = document => {
  const books = document.querySelectorAll('.product_pod');
  
  [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    coverImage: book.querySelector('img').src,
    rating: book.querySelector('p').classList[1],
    price: book.querySelector('.price_color').textContent,
    inStock: !!book.querySelector('.icon-ok')
  }));
};
  
module.exports = parse;
