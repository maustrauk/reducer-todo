import './App.css';

import React, {useReducer} from "react";

import reducer, {initState} from './reducers/reducer';
import {addTodo, toggleTodo, clearCompleted} from './actions/reducerActions';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {

  const[state, dispatch] = useReducer(reducer, initState);

  
  const handleAdd = task => {
    dispatch(addTodo(task));
  }

  const handleToggle = itemId => {
    dispatch(toggleTodo(itemId, state));
  }

  const handleCompleted = () => {
    dispatch(clearCompleted(state));
  }

  return (
    <div className="App-container">
      <h2>All Tasks</h2>
      <TodoList todo={state} handleToggle={handleToggle}/>
      <TodoForm handleAdd={handleAdd} handleCompleted={handleCompleted}/>
    </div>
  );
}

export default App;
