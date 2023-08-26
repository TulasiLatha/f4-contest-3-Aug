import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail';



function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async query => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setSelectedBook(null); // Clear selected book
    setBooks(data.items || []);
  };

  return (
    <div className="app">
      <Navbar onSearch={handleSearch} />
      <div className="content">
        <BookList books={books} setSelectedBook={setSelectedBook} />
        <BookDetail book={selectedBook} />
      </div>
    </div>
  );
}

export default App;
