import React, {Fragment} from 'react';
import CardForm from './CardForm';
import { Button, Card } from "semantic-ui-react";

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
    const {id, question, answer, removeCard, editCard} = this.props

    const content = this.state.showAnswer ? answer : question

    return (
      
        <Card>
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
              <div>
                <Card.Content onClick={this.toggleCard} header={content} as="h2"/>
              </div>
            }
        <Card.Content extra className="ui two buttons">
          <div className="ui two buttons">
          <Button className="delete" color="red" onClick={() => removeCard(id) }>
            Delete
          </Button>
          <Button color="blue" onClick={this.toggleEdit}>
            Edit
          </Button>
          </div>
          </Card.Content>
        </Card>
    
    )
  }
};

export default Flashcard;