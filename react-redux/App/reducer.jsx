import { ADD_ITEM, DONE_ITEM, SHOW_ALL, SHOW_DONE, SHOW_TODO } from './actions.jsx';
import { combineReducers } from 'redux';


// items reducer
function itemsReducer(state=[], action){
  switch (action.type) {

    // Add new item
    case ADD_ITEM:
      return [...state, {
          text: action.text,
          isDone: false
        }]
      break;

    // Done item
    case DONE_ITEM:
      var index = action.index;
      var newState = [...state];
      newState[index].isDone = true;
      return newState
      break;

    default:
      return state;
  }
}

// filter reducer
function filterReducer(state=[], action){
  switch (action.type) {

    // show done
    case SHOW_DONE:
      return 'done'
      break;

    // show todo
    case SHOW_TODO:
      return 'todo'
      break;

    // show all
    case SHOW_ALL:
      return 'all'
      break;

    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer
})
