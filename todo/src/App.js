import './App.css';

import React, {useReducer} from "react";

import reducer, {initState} from './reducers/reducer';
import {addTodo} from './actions/reducerActions';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


function App() {

  const[state, dispatch] = useReducer(reducer, initState);

  
  const handleAdd = task => {
    dispatch(addTodo(task));
  }

  return (
    <div className="App">
      <h2>All Tasks</h2>
      <TodoList todo={state}/>
      <TodoForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;
