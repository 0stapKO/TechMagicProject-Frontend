import { Component } from '@angular/core';
import { UserNavigation } from '../user-navigation/user-navigation';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../services/department-service';
import { Department } from '../../../models/department.model';
import { ExpenseTypeService } from '../../../services/expense-type-service';
import { ExpenseType } from '../../../models/expenseType.model';

@Component({
  selector: 'app-add-expense',
  imports: [UserNavigation, FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.scss'
})
export class AddExpense {
  public type: string = '';
  public date: string = '';
  public amount: number | null = null;
  public allExpenseTypes: ExpenseType[] = [];

  constructor(private expenseTypeService: ExpenseTypeService) {
      this.expenseTypeService.getExpenseTypes().subscribe((types) => {
        this.allExpenseTypes = types;
    });

  }

  addExpense() {
    console.log(`Type: ${this.type}, Date: ${this.date}, Amount: ${this.amount}, Department: ${''}`);
  }
}
