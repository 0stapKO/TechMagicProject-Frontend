import { Component } from '@angular/core';
import { UserNavigation } from '../user-navigation/user-navigation';
import { Expense } from '../../../models/expenses.model';
import { ExpenseService } from '../../../services/expense-service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExpenseTypeService } from '../../../services/expense-type-service';
import { DepartmentService } from '../../../services/department-service';
import { ExpenseType } from '../../../models/expenseType.model';
import { Department } from '../../../models/department.model';

@Component({
  selector: 'app-user-history',
  imports: [UserNavigation, DatePipe, FormsModule],
  templateUrl: './user-history.html',
  styleUrls: ['./user-history.scss', '../../styles/table.scss']
})
export class UserHistory {
  public userExpenses: Expense[] = [];
  public expenseTypes: ExpenseType[] = [];
  public departments: Department[] = [];

  constructor(private expenseService: ExpenseService, private expenseTypeService: ExpenseTypeService,
    private departmentService: DepartmentService) {
    const userId: string | null = localStorage.getItem('userId');
    this.expenseService.getUserExpenses(userId).subscribe(expenses => {
      this.userExpenses = expenses;
      console.log(this.userExpenses)
    })
    this.expenseTypeService.getExpenseTypes().subscribe(types => {
      this.expenseTypes = types;
    })
    this.departmentService.getDepartments().subscribe(departments => {
      this.departments = departments;
    })
  }
  // public history = [
  //   { type: 'Канцелярія', date: '2023-10-01', amount: 150.00 },
  //   { type: 'Продукти', date: '2023-10-05', amount: 200.50 },
  //   { type: 'Транспорт', date: '2023-10-10', amount: 75.20 }
  // ];
}
