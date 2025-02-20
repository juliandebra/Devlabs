export interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: Date;
  user: string;
  subtasks?: string[];
}
