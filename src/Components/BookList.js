import React, { useState, useEffect } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch initial book data from API (e.g., Harry Potter and Sherlock Holmes)
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => response.json())
      .then(data => setBooks(data.items || []));
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <div className="book-card" key={book.id}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <h3>{book.volumeInfo.title}</h3>
          {/* Other book details */}
        </div>
      ))}
    </div>
  );
}

export default BookList;
