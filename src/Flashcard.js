import React from 'react';
import CardForm from './CardForm';
import { Button, Grid } from "semantic-ui-react";

class Flashcard extends React.Component {
  state = {
    showAnswer: false,
    editing: false
  }
  toggleEdit = () => {
    this.setState({editing: !this.state.editing})
  }

  toggleCard = () => {
    this.setState({showAnswer: !this.state.showAnswer});
  };
    

  render() {
    const {id, question, answer, removeCard, editCard } = this.props

    const content = this.state.showAnswer ? answer : question

    return (
      <Grid.Column className="card-container">
            {
              this.state.editing ? 
            <>
              <CardForm 
              question={question} 
              answer={answer} 
              id={id} 
              editCard={editCard}
              toggleEdit={this.toggleEdit}
              /> 
            </>
              : 
             
            <div className="content" onClick={this.toggleCard}>{content}</div>
              
            }
        <div>
          <div className="ui two buttons mini">
          <Button className="delete" color="red" onClick={() => removeCard(id) }>
            Delete
          </Button>
          <Button color="blue" onClick={this.toggleEdit}>
            Edit
          </Button>
          </div>
        </div>
        </Grid.Column>
    )
  }
};

export default Flashcard;