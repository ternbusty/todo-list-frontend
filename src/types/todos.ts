export interface TodoInterface {
  id: string;
  text: string;
  completed?: boolean;
}

export interface TodoActionInterface {
  type: string;
  text?: string;
  todo: TodoInterface;
  completed?: boolean;
}
