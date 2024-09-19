import { useState } from "react";
import { TaskListProps } from "../utils/TaskList";

//COMPLETA LAS FUNCIONES PARA EDITAR Y GUARDAR
// AÑADE REDERIZADO CONDICIONAL A  LOS BOTONES EDIT, SAVE Y COMPLATE
//SOLO SE PUEDE EDITAR Y GUARDAR CUANDO SE TIENE UN ROL ADMIN 
// SOLO SE PUEDE COMPLETAR CUANDO EL NOMBRE DEL USUARIO ES EL MISMO QUE EL ASIGNADO
//PUEDES MEJORA LA INTERFAZ COMO VEAS CONVENIENTE 
  
const TaskList = ({ tasks, currentUser, editTask, completeTask }: TaskListProps) => {
    const [isEditing, setIsEditing] = useState<number | null>(null);
    const [newTitle, setNewTitle] = useState('');
  
    const handleEdit = (taskId: number) => {
  
    };
  
    const handleSave = (taskId: number) => {
     
    };
  
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={`p-2 border-b ${task.completed ? 'text-gray-500 line-through' : ''}`}>
          
            {isEditing === task.id ? (
              <input 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="border p-1"
              />
            ) : (
              <span>{task.title}</span>
            )}
  
            <span className="ml-2 text-sm text-gray-600">({task.assignedTo})</span>
  
              <button 
                onClick={() => handleEdit(task.id)} 
                className="ml-2 text-blue-500">
                Edit
              </button>
          
  
         
         
              <button 
                onClick={() => handleSave(task.id)} 
                className="ml-2 text-green-500">
                Save
              </button>
   
  
    
  
              <button 
                onClick={() => completeTask(task.id)} 
                className="ml-2 text-green-500">
                Complete
              </button>
      
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
