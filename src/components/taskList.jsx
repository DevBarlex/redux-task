import { useSelector } from 'react-redux';
import Task  from './Task'

const TaskList = () => {
    const tasks = useSelector(state => state.task)

    return (
        <ul>
            {tasks.map(task => {
                <Task key={task.id} task={task} />
            })}
        </ul>
    )
}

export default TaskList