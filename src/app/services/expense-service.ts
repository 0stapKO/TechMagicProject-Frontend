import { Injectable } from '@angular/core';
import { Expense } from '../models/expenses.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private token: string | null = localStorage.getItem('token');
  private apiUrl = 'http://localhost:5000/api/expenses';

  constructor(private http: HttpClient) {}

  getAllExpenses(): Observable<Expense[]> {
    const headers = this.token
      ? new HttpHeaders({ 
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
      : undefined;
    const url = this.apiUrl + '/all'
    return this.http.get<Expense[]>(url, { headers });
  }

  getUserExpenses(userId: string | null): Observable<Expense[]> {
    const headers = this.token
      ? new HttpHeaders({ 
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
      : undefined;
      const url = this.apiUrl + `/user/${userId}`;
      return this.http.get<Expense[]>(url, {headers})
  }

  addExpense(expense: Expense): Observable<string> {
    const headers = this.token
      ? new HttpHeaders({ 
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
      : undefined;
    const url = this.apiUrl + '/add';
    return this.http.post<string>(url, expense, {headers})
  }

  deleteExpense(expenseId: string): Observable<void> {
    const headers = this.token
      ? new HttpHeaders({ 
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
      : undefined;
    const url = this.apiUrl + `/delete/${expenseId}`;
    return this.http.delete<void>(url, {headers})
  }

  updateExpense(expense: Expense): Observable<void> {
    // console.log(expense)
    // console.log(this.token)
    const headers = this.token
      ? new HttpHeaders({ 
        'Authorization': `Bearer ${this.token}`,
        'Content-Type': 'application/json'
      })
      : undefined;
    const url = this.apiUrl + `/update/${expense.id}`;
    return this.http.put<void>(url, expense, {headers})
  }
}
