import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from'react-router-dom';
import { fetchCharacters, selectCharacters } from './charactersSlice';

export const CharactersList: React.FC = () => {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <Link to={`/character/${index}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};