import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';
import { Expense } from '../../../models/expenses.model';
import { ExpenseService } from '../../../services/expense-service';

@Component({
  selector: 'app-admin-home',
  imports: [AdminNavigation],
  templateUrl: './admin-home.html',
  styleUrl: './admin-home.scss'
})
export class AdminHome {
  public allExpenses: Expense[] = [];
  constructor(expenseService: ExpenseService) {
    expenseService.getAllExpenses().subscribe((expenses) => {
      this.allExpenses = expenses;
    })
  }
//   public allExpenses = [
//     { name: 'John Doe', department: 'IT', date: '2023-10-01', expence_amount: 120, type: 'Travel' },
//     { name: 'Jane Smith', department: 'HR', date: '2023-10-05', expence_amount: 80, type: 'Supplies' },
//     { name: 'Mike Johnson', department: 'Finance', date: '2023-10-10', expence_amount: 200, type: 'Client Meeting' },
//     { name: 'Emily Davis', department: 'Marketing', date: '2023-10-12', expence_amount: 150, type: 'Advertising' },
//     { name: 'David Wilson', department: 'Sales', date: '2023-10-15', expence_amount: 90, type: 'Travel' }
//   ];
}
