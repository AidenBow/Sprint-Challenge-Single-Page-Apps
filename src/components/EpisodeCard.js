import React from "react";
import { Card, Label } from 'semantic-ui-react';

export default function LocationCard({ name, date, characters, episode }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Content>Amount of characters: {characters}</Card.Content>
        <Label ribbon color="green">{episode}</Label>
      </Card.Content>
    </Card>
  )
}