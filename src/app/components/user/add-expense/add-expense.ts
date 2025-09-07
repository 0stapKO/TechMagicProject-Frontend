import { Component } from '@angular/core';
import { UserNavigation } from '../user-navigation/user-navigation';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../services/department-service';
import { Department } from '../../../models/department.model';
import { ExpenseTypeService } from '../../../services/expense-type-service';
import { ExpenseType } from '../../../models/expenseType.model';
import { ExpenseService } from '../../../services/expense-service';
import { Expense } from '../../../models/expenses.model';

@Component({
  selector: 'app-add-expense',
  imports: [UserNavigation, FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.scss'
})
export class AddExpense {
  public newExpense: Expense = {
          id: '',
          amount: 0,
          date: '',
    }

  public allExpenseTypes: ExpenseType[] = [];
  public departments: Department[] = [];

  constructor(private expenseService: ExpenseService, 
    private expenseTypeService: ExpenseTypeService, private departmentService: DepartmentService) {
      this.expenseTypeService.getExpenseTypes().subscribe((types) => {
        this.allExpenseTypes = types;
    });
    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    })
  }

  addExpense() {
    this.expenseService.addExpense(this.newExpense).subscribe()
  }
}
