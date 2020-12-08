import React from 'react';
import Moment from 'react-moment';

const Todo = props => {

  const handleClick = () => {
    props.handleToggle(props.item.id);
  }

  const overDue = () => {
    return props.overDueCheck(props.item.complete_by);
  }

  return (
      <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
        <p>{props.item.task}</p>
        {props.item.completed ?
        <div className="comleted-time">
          Has been completed <Moment date={props.item.done_at} format="hh:mm:ss" durationFromNow></Moment> hours ago.
        </div> : <div></div>}
        {overDue() ? <div></div> : <div className={`over-due${props.item.completed ? ' completed' : ''}`}>Over dued</div>}
      </div>
  );
};

export default Todo;