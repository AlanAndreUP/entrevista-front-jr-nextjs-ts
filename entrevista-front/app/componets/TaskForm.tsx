import { useState } from 'react';

type TaskFormProps = {
  addTask: (task: { title: string; assignedTo: string }) => void;
};

const TaskForm = ({ addTask }: TaskFormProps) => {
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && assignedTo) {
      addTask({ title, assignedTo });
      setTitle('');
      setAssignedTo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        value={assignedTo}
        onChange={(e) => setAssignedTo(e.target.value)}
        placeholder="Assign to"
        className="border p-2 w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
