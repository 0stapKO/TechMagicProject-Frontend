import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';
import { Expense } from '../../../models/expenses.model';
import { ExpenseService } from '../../../services/expense-service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseTypeService } from '../../../services/expense-type-service';
import { UserService } from '../../../services/user-service';
import { DepartmentService } from '../../../services/department-service';
import { ExpenseType } from '../../../models/expenseType.model';
import { User } from '../../../models/user.model';
import { Department } from '../../../models/department.model';

@Component({
  selector: 'app-admin-home',
  imports: [AdminNavigation, DatePipe, FormsModule],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.scss'
})
export class AdminHome {
  public allExpenses: Expense[] = [];
  public expenseTypes: ExpenseType[] = [];
  public users: User[] = [];
  public departments: Department[] = [];

  constructor(private expenseService: ExpenseService, private expenseTypeService: ExpenseTypeService,
    private userService: UserService, private departmentService: DepartmentService
  ) {
    this.expenseService.getAllExpenses().subscribe((expenses) => {
      this.allExpenses = expenses;
    })
    this.expenseTypeService.getExpenseTypes().subscribe(types => {
      this.expenseTypes = types;
    })
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    })
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    })
  }

  editExpense(expense: Expense) {
    expense.isEdited = true;
  }

  saveChanges(expense: Expense) {
    expense.isEdited = false;
    this.expenseService.updateExpense(expense).subscribe();
  }

  deleteExpense(expenseId: string) {
    this.expenseService.deleteExpense(expenseId).subscribe(() => {
      this.allExpenses = this.allExpenses.filter(expense => expense.id !== expenseId)
    })
  }

  addExpense() {
    const newExpense: Expense = {
      id: '',
      date: '',
      amount: 0,
      isEdited: true
    }
    this.expenseService.addExpense(newExpense).subscribe(expenseId => {
      newExpense.id = expenseId;
      this.allExpenses.push(newExpense);
    })
  }

}
