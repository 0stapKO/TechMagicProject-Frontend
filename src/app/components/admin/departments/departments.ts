import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';
import { DepartmentService } from '../../../services/department-service';
import { Department } from '../../../models/department.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departments',
  imports: [AdminNavigation, FormsModule],
  templateUrl: './departments.html',
  styleUrls: ['./departments.scss', '../../styles/table.scss']
  // styleUrl: './departments.scss'
})
export class Departments {
  public allDepartments: Department[] = [];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.getDepartments().subscribe((departments) => {
      this.allDepartments = departments;
          console.log('ALL DEPARTMENTS', this.allDepartments[0]);})
  }

  editDepartment(department: Department) {
    department.isEdited = true;
  }

  deleteDepartment(departmentId: string) {
    this.departmentService.deleteDepartment(departmentId).subscribe(() => {
      this.allDepartments = this.allDepartments.filter(dept => dept.id !== departmentId);
    });
  }

  saveChanges(department: Department) {
    console.log('Збереження змін для департаменту:', department);
    department.isEdited = false;
    this.departmentService.updateDepartment(department).subscribe((updatedDept) => {
      console.log('Оновлений департамент:', updatedDept);
    });
  }

  addDepartment() {
    const newDepartment: Department = {
      id: '',
      name: '',
      workers_number: 0,
      isEdited: true
    };
    this.departmentService.addDepartment(newDepartment).subscribe((createdDeptId) => {
      newDepartment.id = createdDeptId;
      this.allDepartments.push(newDepartment);
    });

  }
}
