import { combineReducers } from 'redux';
import { todosReducers } from './todo';
import { Todo } from '../actions';

export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducers,
});
