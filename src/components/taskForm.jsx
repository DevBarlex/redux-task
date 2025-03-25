import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todosSlice"; 

const TaskForm = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (input.trim()) {
          dispatch(addTask(input))
          setInput('')
        }
      }
    
      return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
      )
}

export default TaskForm;
