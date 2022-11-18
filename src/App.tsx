import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import './globals.css';

export interface TasksInterface {
  id: number;
  task: string;
  completed: boolean;
}

function App() {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState<Array<TasksInterface>>([]);

  const handleChangeNewTaskInput = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
  }

  const handleCreateNewTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTaskToBeCreate = {
      id: tasks.length + 1,
      task: newTask,
      completed: false
    } as TasksInterface;

    setTasks([...tasks, newTaskToBeCreate]);
    setNewTask('');
  }

  const setCompletedTask = (taskToSetCompleted: TasksInterface) => {

    let newArrayIfCompletedTask = tasks.map(item =>
      item.id === taskToSetCompleted.id
        ? { ...item, completed: !taskToSetCompleted.completed }
        : item
    );

    setTasks(newArrayIfCompletedTask);
  }

  const deleteTask = (taskId: number) => {
    const newTasksWithoutDeletedTask = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(newTasksWithoutDeletedTask);
  }

  return (
    <div className="App">
      <Header
        newTask={newTask}
        onChangeNewTaskInput={handleChangeNewTaskInput}
        onCreateNewTask={handleCreateNewTask}
      />
      <Tasks tasks={tasks} onDeleteTask={deleteTask} onCompleteTask={setCompletedTask} />
    </div>
  )
}

export default App
