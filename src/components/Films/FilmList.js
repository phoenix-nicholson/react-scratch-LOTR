import React from 'react';

export default function FilmList({ film }) {
  return (
    <section className="films">
      {film.map((item) => (
        <div
          className="film"
          key={item.id}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/films/${item.title}).jpeg` }}
        >
          <div className="content">
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
