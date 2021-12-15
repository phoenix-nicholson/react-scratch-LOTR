import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharacterList from '../../components/Characters/CharacterList';

export default function Characters() {
  const [char, setChar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setChar(data);
    };
    fetchData();
  });
  return (
    <div>
      <CharacterList char={char} />
    </div>
  );
}
