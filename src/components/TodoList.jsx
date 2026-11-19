import {useSelector} from 'react-redux';
import TodoItem from './TodoItem';

function TodoList({filter = 'all'}) {
    const todos = useSelector((state) => state.todos);

    const visibleTodos = todos.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    if (visibleTodos.length === 0) {
        return <p>No todos to display.</p>;
    }

    return (
        <ul>
            {visibleTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;