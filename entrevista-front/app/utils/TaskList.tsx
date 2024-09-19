import { User } from "./User";

export type Task = {
    id: number;
    title: string;
    assignedTo: string;
    completed: boolean;
  };
  
  export type TaskListProps = {
    tasks: Task[];
    currentUser: User;
    editTask: (id: number, updatedTitle: string) => void;
    completeTask: (id: number) => void;
  };