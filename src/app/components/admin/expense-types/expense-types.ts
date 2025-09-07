import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';
import { ExpenseType } from '../../../models/expenseType.model';
import { ExpenseTypeService } from '../../../services/expense-type-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-expense-types',
  imports: [AdminNavigation, FormsModule],
  templateUrl: './expense-types.html',
  styleUrls: ['./expense-types.scss', '../../styles/table.scss']
})
export class ExpenseTypes {
  public expenseTypes: ExpenseType[] = [];

  constructor(private expenseTypeService: ExpenseTypeService) {
    this.expenseTypeService.getExpenseTypes().subscribe((types) => {
      this.expenseTypes = types;
      console.log('ALL types', this.expenseTypes[0]);})
  }

  editType(type: ExpenseType) {
    type.isEdited = true;
  }

  deleteType(typeId: string) {
    this.expenseTypeService.deleteExpenseType(typeId).subscribe(() => {
      this.expenseTypes = this.expenseTypes.filter(t => t.id !== typeId);
    });
  }

  saveChanges(type: ExpenseType) {
    type.isEdited = false;
    this.expenseTypeService.updateExpenseType(type).subscribe((updatedType) => {
      console.log('Оновлений тип витрати:', updatedType);
    });
  }

  addType() {
    const newType: ExpenseType = {
      id: '',
      name: '',
      description: '',
      max_amount: 0,
      isEdited: true
    };
    this.expenseTypeService.addExpenseType(newType).subscribe((createdTypeId) => {
      newType.id = createdTypeId;
      this.expenseTypes.push(newType);
    });

  }

}
