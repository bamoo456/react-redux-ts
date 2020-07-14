import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';


interface AppPros {
    todos: Todo[];
    fetchTodos(): any;
    deleteTodo(target: Todo): any;
}


const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
}

class _App extends React.Component<AppPros> {

    onFetch = (): void => {
        this.props.fetchTodos();
    }

    onDelete = (target: Todo): void => {
        this.props.deleteTodo(target);
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div
                key={todo.id}
                onClick={this.onDelete.bind(this, todo)}>
                {todo.title}
            </div>
        });
    }

    render() {
        return <div>
            <button onClick={this.onFetch}>fetch </button>
            {this.renderList()}
        </div>
    }
}

export const App = connect(
    mapStateToProps,
    { fetchTodos, deleteTodo },
)(_App);