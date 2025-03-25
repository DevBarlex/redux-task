import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/todosSlice';

const Task = ({ task }) => {
    const dispatch = useDispatch()

    return (
        <li>
            {task.text}
            <button onClick={() => dispatch(removeTask(task.id))}>Eliminar</button>
        </li>
    )
}

export default Task