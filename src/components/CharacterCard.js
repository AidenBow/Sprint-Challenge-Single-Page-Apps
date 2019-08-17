import React from "react";
import { Card, Image } from 'semantic-ui-react'


export default function CharacterCard(character, id, name, image, status, species) {
  return (
      
      <Card key={id}>
        <Image src={character.image}/>
        <Card.Content>
          <Card.Header>{character.name}</Card.Header>
          <Card.Meta> Status: {character.status}</Card.Meta>
          <Card.Description>{character.species}</Card.Description>
        </Card.Content>
      </Card>
    
  )
}
