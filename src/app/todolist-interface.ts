export interface TodoList {
  id: number;
  title: string;
  notes: string;
}
export interface Items {
  id: number;
  todolist: number;
  item: string;
  notes: string;
}

export interface Habit {
  id: number;
  title: string;
  todolist_link: number;
}
