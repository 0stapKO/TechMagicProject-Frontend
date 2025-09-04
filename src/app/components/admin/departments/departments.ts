import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';
import { DepartmentService } from '../../../services/department-service';
import { Department } from '../../../models/department.model';

@Component({
  selector: 'app-departments',
  imports: [AdminNavigation],
  templateUrl: './departments.html',
  styleUrl: './departments.scss'
})
export class Departments {
  public allDepartments: Department[] = [];
  constructor(private departmentService: DepartmentService) {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.allDepartments = departments;
          console.log('ALL DEPARTMENTS', this.allDepartments[0]);})
  }

  // public departments = [ 
  //   { name: 'IT', workers_count: 10 },
  //   { name: 'HR', workers_count: 5 },
  //   { name: 'Finance', workers_count: 8 },
  //   { name: 'Marketing', workers_count: 7 },
  //   { name: 'Sales', workers_count: 6 }
  //  ];
}
