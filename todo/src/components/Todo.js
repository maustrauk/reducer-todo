import React from 'react';
import Moment from 'react-moment';

const Todo = props => {

  const handleClick = ()=>{
    props.handleToggle(props.item.id);
  }


  return (
      <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
        <p>{props.item.task}</p>
        {props.item.completed ?
        <div className="comleted-time">
          Completed <Moment date={props.item.done_at} format="hh:mm:ss" durationFromNow></Moment> hours ago.
        </div> : <div></div>}
      </div>
  );
};

export default Todo;