import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const ADD_TODO='ADD_TODO'
const REMOVE_TODO='REMOVE_TODO'


export function addTodo(text){
    return {
        type:ADD_TODO,
        text
    }
}

export function removeTodo(text){
    return {
        type:REMOVE_TODO,
        text
    }
}

const todos=(state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                action.text
            ]
        case REMOVE_TODO:
            return state.filter((todo)=>{
                return todo != action.text
            })
        default:
            return state
    }
}

function configureStore() {
    const store = createStore(todos,applyMiddleware(logger));
    
    return store;
}
  
export const store = configureStore(); 