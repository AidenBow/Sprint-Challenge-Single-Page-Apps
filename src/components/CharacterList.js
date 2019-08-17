import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => 
        console.log(err)
      )

    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard 
        character={character} 
        key={character.id} 
        image={character.image} 
        name={character.name} 
        status={character.status}
        species={character.species}
        />
 
      ))}
    </section>
  );
}
