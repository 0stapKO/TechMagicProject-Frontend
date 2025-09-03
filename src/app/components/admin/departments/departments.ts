import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';

@Component({
  selector: 'app-departments',
  imports: [AdminNavigation],
  templateUrl: './departments.html',
  styleUrl: './departments.scss'
})
export class Departments {
  public departments = [ 
    { name: 'IT', workers_count: 10 },
    { name: 'HR', workers_count: 5 },
    { name: 'Finance', workers_count: 8 },
    { name: 'Marketing', workers_count: 7 },
    { name: 'Sales', workers_count: 6 }
   ];
}
