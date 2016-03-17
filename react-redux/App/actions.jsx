export const ADD_ITEM = 'ADD_ITEM';
export const DONE_ITEM = 'DONE_ITEM';
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_TODO = 'SHOW_TODO';
export const SHOW_DONE = 'SHOW_DONE';

export function addItemAction(text){
  return {
    type: ADD_ITEM,
    text
  };
}

export function doneItemAction(i){
  return {
    type: DONE_ITEM,
    index: i
  };
}

export function showAllAction(){
  return {
    type: SHOW_ALL
  };
}

export function showTodoAction(){
  return {
    type: SHOW_TODO
  };
}

export function showDoneAction(){
  return {
    type: SHOW_DONE
  };
}
