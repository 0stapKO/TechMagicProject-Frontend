import { Injectable } from '@angular/core';
import { Expense } from '../models/expenses.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private token: string | null = localStorage.getItem('token');
  private apiUrl = 'http://localhost:5000/api/expenses/all';
  public departments: Expense[] = [];

  constructor(private http: HttpClient) {}

  getAllExpenses(): Observable<Expense[]> {
    const headers = this.token
      ? new HttpHeaders({ 'Authorization': `Bearer ${this.token}` })
      : undefined;
    return this.http.get<Expense[]>(this.apiUrl, { headers });
  }
}
