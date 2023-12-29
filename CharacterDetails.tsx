import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import CharacterCard from "./CharacterCard";

const CharacterDetails: React.FC = () => {
  const selectedCharacter = useSelector(
    (state: RootState) => state.characters.selectedCharacter
  );

  return (
    <div>
      <h1>Character Details</h1>
      <CharacterCard character={selectedCharacter} />
    </div>
  );
};

export default CharacterDetails;