import { User } from '../models/user.model'
import { Department } from '../models/department.model'
import { ExpenseType } from '../models/expenseType.model'

export interface Expense{
    id: string;
    user?: User;
    amount: number;
    date: string;
    type?: ExpenseType;
    department?: Department;
    isEdited?: boolean; 
}