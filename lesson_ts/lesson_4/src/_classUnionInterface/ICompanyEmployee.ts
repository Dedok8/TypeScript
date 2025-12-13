export interface IBaseEmployee {
  id: number;
  name: string;
}

export interface IManagerFields {
  department: string;
  subordinates: number;
}

export interface IEngineerFields {
  stack: string[];
  level: "junior" | "senior";
}

export type Employee =
  | (IBaseEmployee & IManagerFields)
  | (IBaseEmployee & IEngineerFields);
