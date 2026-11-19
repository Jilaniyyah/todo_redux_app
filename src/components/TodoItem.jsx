import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '../redux/actions/todoActions';

function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(todo.title);
    const dispatch = useDispatch();

    const startEditing = () => {
        setDraft(todo.title);
        setIsEditing(true);
    };

    const saveEdit = () => {
        const trimmed = draft.trim();
        if (!trimmed) return;
        dispatch(editTodo(todo.id, trimmed));
        setIsEditing(false);
    };

    const cancelEdit = () => {
        setDraft(todo.title);
        setIsEditing(false);
    };

    return (
        <li>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
            />

            {isEditing ? (
                <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                />
            ) : (
                <span 
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.title}
                </span>
            )}

            {isEditing ? (
                <button onClick={saveEdit}>Save</button>
            ) : (
                <button onClick={startEditing}>Edit</button>
            )}

            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
    );
}

export default TodoItem;