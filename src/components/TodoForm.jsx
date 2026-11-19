import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions/todoActions';

function TodoForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmed = title.trim();
        if (!trimmed) return;

        const newTodo = {
            id: Date.now(),
            title: trimmed,
            completed: false
        };
        
        dispatch(addTodo(newTodo));
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type= "text"
            placholder= "Add a new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit"> Todo</button>
        </form>
    );
}

export default TodoForm;