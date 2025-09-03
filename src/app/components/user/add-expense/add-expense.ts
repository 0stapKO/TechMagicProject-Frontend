import { Component } from '@angular/core';
import { UserNavigation } from '../user-navigation/user-navigation';
import { FormsModule } from '@angular/forms';

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
  public department: string = '';
  addExpense() {
    console.log(`Type: ${this.type}, Date: ${this.date}, Amount: ${this.amount}, Department: ${this.department}`);
  }
}
