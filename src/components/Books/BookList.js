import React from 'react';

export default function BookList({ book }) {
  return (
    <section className="films">
      {book.map((item) => (
        <div className="film" key={item.id}>
          <div className="content">
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
