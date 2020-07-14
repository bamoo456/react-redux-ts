import {FetchTodosAction, DeleteTodoAction, Todo} from '../actions';
import {ActionTypes} from '../actions/types';

type TodoAction = FetchTodosAction | DeleteTodoAction;

export const todosReducers = (state: Todo[] = [], action: TodoAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id != action.payload.id);
    }
    return state;
}
