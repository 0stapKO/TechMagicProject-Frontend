import { Component } from '@angular/core';
import { UserNavigation } from '../user-navigation/user-navigation';

@Component({
  selector: 'app-user-history',
  imports: [UserNavigation],
  templateUrl: './user-history.html',
  styleUrl: './user-history.scss'
})
export class UserHistory {
  constructor() {
    console.log('UserHistory component initialized');
  }
  public history = [
    { type: 'Канцелярія', date: '2023-10-01', amount: 150.00 },
    { type: 'Продукти', date: '2023-10-05', amount: 200.50 },
    { type: 'Транспорт', date: '2023-10-10', amount: 75.20 }
  ];
}
