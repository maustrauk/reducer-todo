import React from "react";
import moment from 'moment';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: "",
      dateInput: moment().format("YYYY-MM-DD")
    }
  }

  handleChanges = e => {

    const {name, value} = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleAdd(this.state);
    this.setState({
      textInput:"",
      dateInput: moment().format("YYYY-MM-DD")
    });
  }

  handleCompleted = e => {
    e.preventDefault();
    this.props.handleCompleted();
    console.log('Clear');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <button onClick={this.handleCompleted} className="clear-btn">Clear Completed</button>
        <label>
          Task:
          <input value={this.state.textInput} onChange={this.handleChanges} type="text" name="textInput" />
        </label>
        <label>
          Due to:
          <input value={this.state.dateInput} onChange={this.handleChanges} type="date" name="dateInput" min={this.state.dateInput}/>
        </label>
        <button className="add-btn">Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;