import React from 'react';
import { useState, useEffect } from 'react';
import { fetchCharacters } from '../../services/characters';
import CharacterList from '../../components/Characters/CharacterList';
import Controls from '../../components/Characters/controls';

export default function Characters() {
  const [char, setChar] = useState([]);
  const [races, setRaces] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(races);
      setChar(data);
    };

    fetchData();
  }, [races]);
  return (
    <div>
      <Controls races={races} setRaces={setRaces}></Controls>
      <CharacterList char={char} races={races} setRaces={setRaces} />
    </div>
  );
}
