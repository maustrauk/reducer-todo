import './App.css';

import React, {useReducer} from "react";
import moment from 'moment';

import reducer, {initState} from './reducers/reducer';
import {addTodo, toggleTodo, clearCompleted} from './actions/reducerActions';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {

  const[state, dispatch] = useReducer(reducer, initState);

  
  const handleAdd = taskObj => {
    dispatch(addTodo(taskObj));
  }

  const handleToggle = itemId => {
    dispatch(toggleTodo(itemId, state));
  }

  const handleCompleted = () => {
    dispatch(clearCompleted(state));
  }

  const overDueCheck = (complete_by) => {
    const dueTime = moment(complete_by, "YYYY-MM-DD")
    return moment().isBefore(dueTime) ;
  }

  return (
    <div className="App-container">
      <h2>All Tasks</h2>
      <TodoList todo={state} handleToggle={handleToggle} overDueCheck={overDueCheck}/>
      <TodoForm handleAdd={handleAdd} handleCompleted={handleCompleted}/>
    </div>
  );
}

export default App;
