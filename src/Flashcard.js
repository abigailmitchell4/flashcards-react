import React from 'react';
import { Button, Grid } from "semantic-ui-react";

class Flashcard extends React.Component {
  state = {
    showAnswer: false
  }

  toggleCard = () => {
    this.setState({showAnswer: !this.state.showAnswer});
  };

  render() {
    const content = this.state.showAnswer ? this.props.answer : this.props.question
    return (
      <Grid.Column>
        <div onClick={this.toggleCard} className="card-container">
          <h2>{content}</h2>
          <Button className="delete" color="red" onClick={() => this.props.removeCard(this.props.id) }>
              Delete
          </Button>
        </div>
      </Grid.Column>
    )
  }
};

export default Flashcard;