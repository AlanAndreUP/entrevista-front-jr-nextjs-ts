"use client"
import { useState } from 'react';
import TaskList from './componets/TaskList';
import TaskForm from './componets/TaskForm';
import { User } from './utils/User';

// Completa las funciones
const initialTasks = [
  { id: 1, title: 'Task 1', assignedTo: 'John', completed: false },
  { id: 2, title: 'Task 2', assignedTo: 'Jane', completed: false },
];

const HomePage = () => {
  const [currentUser] = useState<User>({ name: 'Admin', role: 'admin' });
  const [tasks, setTasks] = useState(initialTasks);
//Función para editar una tarea
  const editTask = (id: number, updatedTitle: string) => {
   
    setTasks(updatedTasks);
  };

  // Función para completar una tarea
  const completeTask = (id: number) => {
   
    setTasks(updatedTasks);
  };
  const addTask = (task: { title: string; assignedTo: string }) => {
    const newTask = {
      id: tasks.length + 1,
      title: task.title,
      assignedTo: task.assignedTo,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Task Management</h1>
      <TaskList tasks={tasks} />
      {currentUser.role === 'admin' && <TaskForm addTask={addTask} />}
    </div>
  );
};

export default HomePage;
