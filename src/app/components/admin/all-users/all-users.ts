import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';

@Component({
  selector: 'app-all-users',
  imports: [AdminNavigation],
  templateUrl: './all-users.html',
  styleUrl: './all-users.scss'
})
export class AllUsers {
  public users = [
    { name: 'John Doe', department: 'IT', email: '123@dmail.com', role: 'User' },
    { name: 'Jane Smith', department: 'HR', email: 'janesmith@.com', role: 'Admin' },
    { name: 'Mike Johnson', department: 'Finance', email: 'mikej@.com', role: 'User' },
    { name: 'Emily Davis', department: 'Marketing', email: 'emilyd@.com', role: 'User' },
    { name: 'David Wilson', department: 'Sales', email: 'davidw@.com', role: 'Admin' }
  ];
}
