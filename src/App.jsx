import TaskForm from './components/taskForm'
import TaskList from './components/taskList'
import './App.css'

const App = () => {
  return (
    <div className='list'>
      <h1>Lista de tareas</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  );
};

export default App;
