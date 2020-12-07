import './App.css';

import React, {useReducer} from "react";

import reducer, {initState} from './reducers/reducer';

import TodoList from './components/TodoList';


function App() {

  const[state, dispatch] = useReducer(reducer, initState);

  console.log(state);

  return (
    <div className="App">
      <h2>All Tasks</h2>
      <TodoList todo={state}/>
    </div>
  );
}

export default App;
