import React from 'react';

export default function CharacterList({ char }) {
  return (
    <section className="characters">
      {char.map((item) => (
        <div className="character" key={item.name}>
          <a href={item.wikiUrl}>{item.name}</a>
          <p>{item.race}</p>
        </div>
      ))}
    </section>
  );
}
