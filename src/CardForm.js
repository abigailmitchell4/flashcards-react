import React from 'react';
import { Form } from 'semantic-ui-react';

class CardForm extends React.Component {

  state = { question: "", answer: ""} 

  componentDidMount() {
    if (this.props.id) 
      this.setState({ question: this.props.question, answer: this.props.answer})
  };

  handleSubmit = (e) => {
    //make sure form doesn't auto submit:
    e.preventDefault();
    if (this.props.id)
      this.props.editCard({id: this.props.id, question: this.state.question, answer: this.state.answer})
    else
      this.props.addCard(this.state);
      this.setState({ question: "", answer: ""})
  };

  handleChange = (e) => {
    //wrap e.target.name in square brackets so that it doesn't return the value as a string
    this.setState({ [e.target.name]: e.target.value, })
  };

  render() {
    const { question, answer } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid 
          required
          label="Question" 
          placeholder="Question" 
          name="question" 
          value={ question } 
          onChange={this.handleChange}
        />
        <Form.Input
          fluid 
          required
          label="Answer" 
          placeholder="Answer" 
          name="answer"
          value={ answer } 
          onChange={this.handleChange}
        />
        <Form.Button color="blue" inverted>Submit</Form.Button>
      </Form>
    );
  };
};

export default CardForm;