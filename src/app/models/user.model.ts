import { Department } from "./department.model";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  department?: Department;
  isEdited?: boolean;
}