export interface ITasks {
  success: boolean;
  data: Task[];
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  is_completed: boolean;
  due_at?: string;
  created_at: string;
  updated_at: string;
}
export interface NeTasks {
  success: boolean;
  data: Task;
}
