import React from 'react';
import Flashcard from './Flashcard';
import { Grid } from 'semantic-ui-react';

const Cards = ({ cards, removeCard, editCard }) => (
  <Grid>
    <Grid.Row columns={4}> 
    {
      cards.map( card => ( 
        //define new prop for remove contact and pass it removeContact prop(remember this removeContact prop is a function defined in App.js)
        <Flashcard key={card.id} {...card} removeCard={removeCard} editCard={editCard}/>
      ))
    }
    </Grid.Row>
  </Grid>
)

export default Cards;