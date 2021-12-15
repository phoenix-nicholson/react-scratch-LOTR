import React from 'react';
import { useState, useEffect } from 'react';
import { fetchFilms } from '../../services/films';
import FilmList from '../../components/Films/FilmList';

export default function Films() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilms();
      setFilm(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <FilmList film={film} />
    </div>
  );
}
