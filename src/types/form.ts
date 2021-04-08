export interface FormEventInterface {
  preventDefault(): void;
}

export interface InputEventInterface {
  target: {
    value: string;
  };
}
