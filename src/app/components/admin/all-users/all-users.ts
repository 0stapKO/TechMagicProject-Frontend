import { Component } from '@angular/core';
import { AdminNavigation } from '../admin-navigation/admin-navigation';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user-service';
import { DepartmentService } from '../../../services/department-service';
import { FormsModule } from '@angular/forms';
import { Department } from '../../../models/department.model';
@Component({
  selector: 'app-all-users',
  imports: [AdminNavigation, FormsModule],
  templateUrl: './all-users.html',
  styleUrl: './all-users.scss'
})
export class AllUsers {
  public users: User[] = [];
  public departments: Department[] = []

  constructor(private userService: UserService, private departmentService: DepartmentService) {
    userService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(users[0])
    });
    departmentService.getDepartments().subscribe((departments) =>{
      this.departments = departments;
      console.log(this.departments[0])
    })
  }
 
  editUser(user: User) {
    user.isEdited = true;
  }

  deleteUser(userId: string) {
    console.log(userId)
    this.userService.deleteUser(userId).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    })
  }

  saveUser(user: User){
    console.log(user)
    user.isEdited = false;
    this.userService.updateUser(user).subscribe(user => {
      console.log(user)
    })
  }

  addUser() {
    const newUser: User = {
      id: '',
      name: '',
      email: '',
      password: '',
      role: 'user',
      isEdited: true
    }
    this.userService.addUser(newUser).subscribe(userId => {
      newUser.id = userId;
      this.users.push(newUser);
    })
  }
}
