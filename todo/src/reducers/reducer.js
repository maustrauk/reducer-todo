import {ADD_TODO} from './../actions/reducerActions';

export const initState = [{
  task: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

const reducer = (state, action) => {
    switch (action.type) {
      case(ADD_TODO):
        return([...state, action.payload]);
      default:
        return state;
    }
  }

export default reducer;