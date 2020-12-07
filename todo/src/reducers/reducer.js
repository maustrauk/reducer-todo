import {ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED} from './../actions/reducerActions';

export const initState = [{
  task: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

const reducer = (state, action) => {
    switch (action.type) {
      case(ADD_TODO):
        return([...state, action.payload]);
      case(TOGGLE_TODO):
        return(action.payload);
      case(CLEAR_COMPLETED):
        return(action.payload);
      default:
        return state;
    }
  }

export default reducer;