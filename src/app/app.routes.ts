import { Routes } from '@angular/router';
import { UserHistory } from './components/user/user-history/user-history'; 
import { Login } from './components/login/login';
import { AddExpense } from './components/user/add-expense/add-expense';
import { AdminHome } from './components/admin/admin-home/admin-home';
import { Departments } from './components/admin/departments/departments';
import { AllUsers } from './components/admin/all-users/all-users';
import { ExpenseTypes } from './components/admin/expense-types/expense-types';


export const routes: Routes = [
    { path: 'home', component: UserHistory },
    { path: 'add-expense', component: AddExpense },
    { path: 'login', component: Login },
    { path: 'admin/home', component: AdminHome },
    { path: 'admin/departments', component: Departments},
    { path: 'admin/users', component: AllUsers},
    { path: 'admin/expense-types', component: ExpenseTypes},
    { path: '**', redirectTo: 'login' }
];