import React from "react";
import { Card, Label } from 'semantic-ui-react';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{type}</Card.Meta>
        <Card.Content>Dimension: {dimension}</Card.Content>
        <Label ribbon color="blue">Population: {residents}</Label>
      </Card.Content>
    </Card>
  )
}
