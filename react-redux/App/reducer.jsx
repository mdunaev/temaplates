export default function(state, action){
  var newState = Object.assign({}, state);
  switch (action.type) {
    case 'add':
      newState.items.push({
        text: action.text,
        isDone: false
      });
      return newState;
      break;
    default:
      return state;
  }
}
