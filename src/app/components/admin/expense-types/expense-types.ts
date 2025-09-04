import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';
import { ExpenseType } from '../../../models/expenseType.model';
import { ExpenseTypeService } from '../../../services/expense-type-service';

@Component({
  selector: 'app-expense-types',
  imports: [AdminNavigation],
  templateUrl: './expense-types.html',
  styleUrl: './expense-types.scss'
})
export class ExpenseTypes {
  // public expenseTypes = [
  //   { name: 'Travel', max_amount: 500 },
  //   { name: 'Supplies', max_amount: 300 },
  //   { name: 'Client Meeting', max_amount: 400 },
  //   { name: 'Software', max_amount: 600 },
  //   { name: 'Hardware', max_amount: 1000 }
  // ];

  public expenseTypes: ExpenseType[] = [];
  constructor(private expenseTypeService: ExpenseTypeService) {
    this.expenseTypeService.getExpenseTypes().subscribe((types) => {
      this.expenseTypes = types;
          console.log('ALL types', this.expenseTypes[0]);})
  }
}
