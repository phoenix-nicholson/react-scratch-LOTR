import React from 'react';
import { useState, useEffect } from 'react';
import { fetchBooks } from '../../services/books';
import BookList from '../../components/Books/BookList';

export default function Books() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBooks();
      setBook(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <BookList book={book} />
    </div>
  );
}
